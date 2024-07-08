'use client'
import Layout from "@/components/layout/Layout"
import data from "@/util/blog.json"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface Post {
    id: number
    title: string
    img: string
    category: string
    date: string
}

export default function BlogDetails() {
    let Router = useParams()
    const [blogPost, setBlogPost] = useState<Post | null>(null)
    const id = Router?.id

    useEffect(() => {
        if (id) {
            const post = data?.find((post: Post) => String(post.id) === String(id))
            setBlogPost(post || null)
        }
    }, [id])

    return (
        <>
            <Layout fixedHeader>
                <section className="blog__details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog__details-wrap mb-100">
                                    <div className="blog__details-thumb">
                                        <img src="/assets/img/blog/blog-details-1-1.jpg" alt="img" />
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="far fa-clock" />DECEMBER 14, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog__details-content">
                                        <h2 className="page-title mb-30">AI IN HEALTHCARE: REVOLUTIONIZING THE MEDICAL INDUSTRY</h2>
                                        <p className="mb-30">In recent years, the healthcare industry has witnessed a groundbreaking transformation driven by the integration of artificial intelligence (AI) technologies. These advancements are revolutionizing patient care, medical research, diagnostics, and treatment strategies. The synergy between AI and healthcare is reshaping the landscape of medicine, offering new possibilities and improved outcomes.</p>
                                        <p>One of the most remarkable applications of AI in healthcare is in diagnostics. Machine learning algorithms are capable of analyzing vast amounts of medical data with unprecedented speed and accuracy. This has led to earlier and more precise disease detection, greatly enhancing the chances of successful treatment.</p>
                                        <blockquote>
                                            <p>Multixion has been an invaluable partner to us. Any talent we've worked with has shown a deep
                                                understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. </p>
                                        </blockquote>
                                        <p className="mb-0">AI-driven predictive analytics are being used to forecast disease outbreaks and patient admission rates, enabling hospitals and healthcare facilities to allocate resources more efficiently. This is especially crucial during public health emergencies.</p>
                                        <div className="blog__details-content-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6">
                                                    <div className="post-tags">
                                                        <h5 className="title">TAGS:</h5>
                                                        <ul className="list-wrap">
                                                            <li><Link href="/#">Marketing</Link></li>
                                                            <li><Link href="/#">Brand</Link></li>
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
