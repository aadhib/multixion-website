'use client'

import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../loading';

export interface BlogInterface {
    frontmatter: {
        id: number
        title: string
        img: string
        category: string
        date: string
    };
    content: string;
}

export interface BlogResultObject {
    blogs: BlogAPI[]
}

export interface BlogAPI {
    frontmatter: {
        [key: string]: any;
    };
    content: string;
}

export default function Blog() {
    const [blogsAPIResponse, setBlogsAPIResponse] = useState<BlogResultObject | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/blog/api`);

                if (!res.ok) {
                    throw new Error('Failed to fetch post');
                }
                const response = await res.json();
                setBlogsAPIResponse(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, []);

    let blogs = blogsAPIResponse?.blogs;

    if (!blogs) {
        return <Loading />
    }

    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <section className="blog-area-4 pt-110 pb-120">
                    <div className="container">
                        <div className="row gy-80 justify-content-center">
                            {blogs.map(({ frontmatter }) =>
                                <div className="col-xl-4 col-md-6" key={frontmatter.id}>
                                    <div className="blog__post-item-five shine-animate-item">
                                        <div className="blog__post-thumb">
                                            <Link className="shine-animate" href={"/blog/" + frontmatter.id}><img src={"/assets/img/blog/" + frontmatter.img} alt="img" /></Link>
                                        </div>
                                        <div className="blog__post-content">
                                            <h3 className="title"><Link href={"/blog/" + frontmatter.id}>{frontmatter.title}</Link></h3>
                                            <Link href={"/blog/" + frontmatter.id} className="link-btn">
                                                Read More
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}