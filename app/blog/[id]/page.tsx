'use client'

import Loading from "@/app/loading";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BlogInterface } from "../page";


export default function BlogPost() {
    const [blog, setBlog] = useState<BlogInterface | null>(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/blog/${id}/api`);

                if (!res.ok) {
                    throw new Error('Failed to fetch post');
                }

                await res.json().then((data) => {
                    setBlog(data);
                });
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, []);

    if(!blog) return <Loading/>

    return (
        <>
            <Layout fixedHeader>
                <section className="blog__details-area pt-120 pb-120" key={blog?.frontmatter?.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog__details-wrap mb-100">
                                    <div className="blog__details-thumb">
                                        <img className="w-100" src={"/assets/img/blog/" + blog?.frontmatter?.img} alt="img" />
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="far fa-clock" />{blog?.frontmatter?.date}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog__details-content">
                                        <div dangerouslySetInnerHTML={{ __html: blog?.content ?? "" }} />
                                        <div className="blog__details-content-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6">
                                                    <div className="post-tags">
                                                        <h5 className="title">TAGS:</h5>
                                                        <ul className="list-wrap">
                                                            <li><Link href="/#">{blog?.frontmatter?.category}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="blog-post-share">
                                                        <h5 className="title">SHARE:</h5>
                                                        <div className="footer__social2">
                                                            <ul className="list-wrap">
                                                                <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
                                                                <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                                                <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
                                                                <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}


