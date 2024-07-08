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
                                        <h2 className="title">CLOUD SOLUTIONS</h2>
                                        <p className="sec-text">Explore the realm of Cloud solution development and discover how custom solutions can transform your business operations and scalability.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Development Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Custom Cloud Softwares</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> SaaS Development</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Cloud Migration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/5-2.webp" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Development Deliverables</h3>
                                <p className="mb-30">Cloud solution development involves creating scalable, flexible, and efficient software solutions hosted on cloud platforms. This includes developing custom cloud applications, migrating existing applications to the cloud, and building SaaS products.</p>
                                <p>Custom cloud solutions are tailored to meet specific business requirements, providing optimized performance and seamless integration with other systems. Cloud migration involves moving data, applications, and workloads to a cloud environment, ensuring improved efficiency and cost savings.</p>
                                <h3 className="page-title mt-60 mb-30">UX Deliverables</h3>
                                <p className="mb-0">User experience design for cloud applications focuses on creating user-friendly interfaces and ensuring a smooth user journey. Key deliverables include user personas, wireframes, interactive prototypes, and usability test reports, all aimed at enhancing user satisfaction and engagement.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We build solutions that scale with your business.</h3>
                                    <p className="mb-30">The following details the responsibilities a cloud software developer may have at each phase of a project.</p>
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
                                    <img className="w-100 bw-filter" src="/assets/img/service/5-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
