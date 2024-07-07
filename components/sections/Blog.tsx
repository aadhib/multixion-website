import Link from "next/link"
import blogs from "@/util/blog.json"

export default function Blog1() {
    return (
        <>
            <section className="blog-area-1 pt-110 pb-120">
                <div className="container">
                    <div className="section__title mb-50">
                        <h2 className="title wow img-custom-anim-left">INSIGHTS</h2>
                    </div>
                    <div className="row gy-30 align-items-end">
                        {blogs.slice(0, 3).map(({img,title,id,date,category}) =>
                            <div key={id} className="col-12">
                                <div className="blog__post-item">
                                    <div className="blog__post-thumb wow img-custom-anim-right">
                                        <Link href="/blog-details"><img src={"/assets/img/blog/" + img} alt="img" /></Link>
                                    </div>
                                    <div className="blog__post-content wow img-custom-anim-left">
                                        <span className="blog__post-date">{date}</span>
                                        <h3 className="title"><Link href={"blog/" + id}>{title}</Link></h3>
                                        <div className="blog__post-bottom">
                                            <div className="blog__post-meta">
                                                <ul className="list-wrap">
                                                    <li><Link href={"blog/" + category}>{category}</Link></li>
                                                </ul>
                                            </div>
                                            <Link href={"blog/" + id} className="link-btn">
                                                Read More
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="tg-button-wrap justify-content-center mt-70">
                        <Link href="/blog" className="btn border-dark wow img-custom-anim-top">
                            More Insights
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
