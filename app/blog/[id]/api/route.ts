import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';
import { remark } from 'remark'
import html from 'remark-html'

export async function GET(request: Request, response: Response) {
    const id = request.url.split('/')[4];

    try {
        const filePath = path.join(process.cwd(), 'markdown', `${id}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        let { data: frontmatter, content } = matter(fileContent);

        const processedContent = await remark().use(html).process(content);
        let contentHtml = processedContent.toString();

        content = contentHtml;

        return NextResponse.json({
            frontmatter,
            content,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 404 });
    }
}