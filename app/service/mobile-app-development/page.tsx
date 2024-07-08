import Layout from "@/components/layout/Layout"

export default function ServiceDetails() {
    return (
        <>
            <Layout breadcrumbTitle="Services Details">
                <div>
                    <div className="service-details-page-area pt-110 pb-110">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-6">
                                    <div className="section__title mb-50">
                                        <h2 className="title">MOBILE APP DEVELOPMENT</h2>
                                        <p className="sec-text">Discover the world of mobile app development, including native and cross-platform solutions, and their impact on user engagement.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Development Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Native App Development</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Cross-Platform App Development</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Mobile UI/UX Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/4-2.webp" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Development Deliverables</h3>
                                <p className="mb-30">Mobile app development encompasses various aspects such as native and cross-platform development, user experience design, and robust backend integration. Each approach offers unique benefits and challenges, tailored to meet the specific needs of the project.</p>
                                <p>Native development provides the best performance and user experience by leveraging platform-specific languages and frameworks. Cross-platform development, on the other hand, allows for a single codebase to be used across multiple platforms, reducing development time and cost.</p>
                                <h3 className="page-title mt-60 mb-30">UX Deliverables</h3>
                                <p className="mb-0">Mobile UX design focuses on creating intuitive and engaging experiences for users. This involves user research, prototyping, and testing to ensure the final product meets user needs and expectations. Key deliverables include user personas, wireframes, interactive prototypes, and usability test reports.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We create seamless mobile experiences.</h3>
                                    <p className="mb-30">The following details the responsibilities a mobile app developer may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Requirement Analysis</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> User Research</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Prototyping</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Development</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Testing and QA</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Deployment</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Maintenance and Support</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100 bw-filter" src="/assets/img/service/4-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
