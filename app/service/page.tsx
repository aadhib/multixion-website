import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service() {

    return (
        <>
            {/*======== / Service Section ========*/}
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="service-area-2 pt-120 pb-120">
                        <div className="container">
                            <div className="row gx-30 gy-30">
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">01</h5>
                                        <h4 className="service-card-title"><Link href="/service/it-consulting">IT Consulting</Link></h4>
                                        <p className="service-card-text">Tailored IT strategies to optimize your business operations and enhance efficiency.</p>
                                        <Link href="/service/it-consulting" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">02</h5>
                                        <h4 className="service-card-title"><Link href="/service/software-development">Software Development</Link></h4>
                                        <p className="service-card-text">Custom software solutions designed to meet your specific business needs and drive growth.</p>
                                        <Link href="/service/software-development" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">03</h5>
                                        <h4 className="service-card-title"><Link href="/service/web-development">Web Development</Link></h4>
                                        <p className="service-card-text"> Responsive and scalable web solutions that elevate your online presence and user experience.</p>
                                        <Link href="/service/web-development" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">04</h5>
                                        <h4 className="service-card-title"><Link href="/service/mobile-app-development">Mobile App Development</Link></h4>
                                        <p className="service-card-text">Innovative mobile applications that engage users and deliver seamless experiences across platforms.</p>
                                        <Link href="/service/mobile-app-development" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">05</h5>
                                        <h4 className="service-card-title"><Link href="/service/cloud-solutions">Cloud Solutions</Link></h4>
                                        <p className="service-card-text">Secure and scalable cloud infrastructure to streamline your operations and ensure data accessibility.</p>
                                        <Link href="/service/cloud-solutions" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">06</h5>
                                        <h4 className="service-card-title"><Link href="/service/cybersecurity">Cybersecurity</Link></h4>
                                        <p className="service-card-text"> Robust cybersecurity measures to protect your digital assets and safeguard against potential threats.</p>
                                        <Link href="/service/cybersecurity" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">07</h5>
                                        <h4 className="service-card-title"><Link href="/service/networking">Networking</Link></h4>
                                        <p className="service-card-text">Efficient network solutions to optimize connectivity and facilitate seamless communication within your organization.</p>
                                        <Link href="/service/networking" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">08</h5>
                                        <h4 className="service-card-title"><Link href="/service/it-support-maintenance">IT Support & Maintenance</Link></h4>
                                        <p className="service-card-text">Proactive IT support and maintenance services to keep your systems running smoothly and minimize downtime.</p>
                                        <Link href="/service/it-support-maintenance" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">09</h5>
                                        <h4 className="service-card-title"><Link href="/service/creative-branding-solutions">Creative Branding</Link></h4>
                                        <p className="service-card-text">Strategic branding initiatives that define your brand identity and resonate with your target audience.</p>
                                        <Link href="/service/creative-branding-solutions" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*======== / Skill Section ========*/}
                    <section className="skill-area-1 pt-120 pb-120 black-bg position-relative">
                        <div className="skill-area-bg-shape1 square-shape-wrap">
                            <div className="square-shape1" />
                            <div className="square-shape3" />
                            <div className="square-shape4" />
                        </div>
                        <div className="container">
                            <div className="row gy-40 align-items-center">
                                <div className="col-xl-5">
                                    <div className="skill-thumb-box1 wow img-custom-anim-left">
                                        <img src="/assets/img/others/skill1-1.jpg" alt="img" />
                                        <div className="square-shape-wrap">
                                            <div className="square-shape1" />
                                            <div className="square-shape2" />
                                            <div className="square-shape3" />
                                            <div className="square-shape4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="skill-wrap1">
                                        <div className="section__title mb-50 wow img-custom-anim-left">
                                            <h2 className="title text-white">DEVOTED TO CREATING QUALITY DESIGN EXPERIENCES</h2>
                                            <p className="sec-text text-white">We aim to empower brands of all sizes and industries with data-driven strategies that yield tangible results. We believe in crafting campaigns that not only drive traffic but also foster engagement and conversions.</p>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">BRANDING</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '90%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">90</span>%</div>
                                            </div>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">DEVELOPMENT</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '70%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">70</span>%</div>
                                            </div>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">MARKETING</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '69%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">69</span>%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*======== / FAQ Section ========*/}
                    <section className="faq-area-2 pt-120 pb-120 gray-bg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}