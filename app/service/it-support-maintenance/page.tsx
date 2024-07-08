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
                                        <h2 className="title">IT SUPPORT AND MAINTENANCE</h2>
                                        <p className="sec-text">Ensure the optimal performance of your IT infrastructure with our comprehensive support and maintenance services.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Support Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> System Monitoring and Management</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Technical Support</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Software Updates and Patches</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Network Management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/8-2.jpg" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Maintenance Deliverables</h3>
                                <p className="mb-30">Our IT support and maintenance services are designed to keep your systems running smoothly and efficiently. We provide ongoing monitoring, proactive maintenance, and prompt resolution of technical issues to minimize downtime and ensure the continuity of your business operations.</p>
                                <p>With our support services, you gain access to a team of skilled IT professionals who can address a wide range of technical challenges. We offer remote and on-site support, software updates, patch management, and network administration to keep your IT environment secure and up-to-date.</p>
                                <h3 className="page-title mt-60 mb-30">Proactive Maintenance</h3>
                                <p className="mb-0">We take a proactive approach to IT maintenance, identifying and resolving potential issues before they impact your operations. Key deliverables include system health checks, performance optimization, security assessments, and regular maintenance schedules to ensure your IT infrastructure remains robust and reliable.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We ensure your systems run smoothly.</h3>
                                    <p className="mb-30">The following details the responsibilities an IT support specialist may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Initial Assessment</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> System Monitoring</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Technical Support</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Preventive Maintenance</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Issue Resolution</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Performance Tuning</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Security Updates</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100 bw-filter" src="/assets/img/service/8-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
