import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';
import { remark } from 'remark'
import html from 'remark-html'
import { BlogAPI } from '../page';



export async function GET(request: Request, response: Response) {
    let blogs : BlogAPI[] = [];

    try {
        const markdownFiles = fs.readdirSync(path.join(process.cwd(), 'markdown'));

        let getAllBlogs = markdownFiles.map(async (filename) => {
            const filePath = path.join(process.cwd(), 'markdown', filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');

            let { data: frontmatter, content } = matter(fileContent);
            const processedContent = await remark().use(html).process(content);
            let contentHtml = processedContent.toString();
            content = contentHtml;

            return {
                frontmatter, content
            }
        });

        await Promise.all(getAllBlogs).then((result) => {
            blogs = result;
        })

        return NextResponse.json({ blogs }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 404 });
    }
}