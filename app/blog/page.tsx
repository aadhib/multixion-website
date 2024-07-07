import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import blogs from "@/util/blog.json"

export default function Blog() {
    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <section className="blog-area-4 pt-110 pb-120">
                    <div className="container">
                        <div className="row gy-80 justify-content-center">
                            {blogs.map(({ id, img, title }) =>
                                <div className="col-xl-4 col-md-6">
                                    <div className="blog__post-item-five shine-animate-item">
                                        <div className="blog__post-thumb">
                                            <Link className="shine-animate" href={"/blog/" + id}><img src={"/assets/img/blog/" + img} alt="img" /></Link>
                                        </div>
                                        <div className="blog__post-content">
                                            <h3 className="title"><Link href={"/blog/" + id}>{title}</Link></h3>
                                            <Link href={"/blog/" + id} className="link-btn">
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