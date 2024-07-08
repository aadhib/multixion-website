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
                                        <h2 className="title">SOFTWARE DEVELOPMENT</h2>
                                        <p className="sec-text">Discover our custom software development services designed to meet your unique business needs.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Development Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Custom Software Development</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Enterprise Software Solutions</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Cloud Software Development</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Software Integration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/2-2.jpg" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Development Deliverables</h3>
                                <p className="mb-30">Our software development services cover the full spectrum from requirement analysis to deployment and maintenance. We ensure the delivery of high-quality, scalable, and maintainable software solutions tailored to meet your business objectives.</p>
                                <p>Our expertise includes custom software development, where we create solutions specifically designed for your business needs. We also provide enterprise software solutions to streamline your business processes, cloud software development for scalable and flexible solutions, and software integration services to ensure seamless connectivity between different systems.</p>
                                <h3 className="page-title mt-60 mb-30">UX/UI Design Deliverables</h3>
                                <p className="mb-0">Creating an intuitive and engaging user experience is a critical aspect of our software development process. Our UX/UI design services involve user research, prototyping, and usability testing to ensure the final product meets user expectations. Key deliverables include user personas, wireframes, interactive prototypes, and usability test reports.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We deliver tailored software solutions.</h3>
                                    <p className="mb-30">The following details the responsibilities a software developer may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Requirement Analysis</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> System Design</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Development</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Testing and QA</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Deployment</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Maintenance and Support</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100 bw-filter" src="/assets/img/service/2-3.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
