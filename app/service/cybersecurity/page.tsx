import Layout from "@/components/layout/Layout"

export default function ServiceDetails() {
    return (
        <>
            <Layout breadcrumbTitle="Services Details">
                <div>
                    <div className="service-details-page-area pt-110">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-6">
                                    <div className="section__title mb-50">
                                        <h2 className="title">CYBERSECURITY</h2>
                                        <p className="sec-text">Explore our comprehensive cybersecurity solutions designed to protect your business from evolving threats and vulnerabilities.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Security Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Threat Detection and Response</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Security Audits and Assessments</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Network and Endpoint Security</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Cloud Security</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100" src="/assets/img/service/service-details-1-1.jpg" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Cybersecurity Deliverables</h3>
                                <p className="mb-30">Our cybersecurity services encompass a wide range of solutions tailored to safeguard your business from digital threats. From proactive threat detection and incident response to comprehensive security audits and robust network protection, we ensure your business remains secure.</p>
                                <p>We offer advanced threat detection and response capabilities to identify and mitigate security incidents swiftly. Our security audits and assessments help uncover vulnerabilities and implement necessary safeguards. Network and endpoint security solutions provide robust protection for your IT infrastructure, while our cloud security services ensure the safety of your data in the cloud.</p>
                                <h3 className="page-title mt-60 mb-30">Strategic Approach</h3>
                                <p className="mb-0">Our cybersecurity approach is built on a foundation of continuous monitoring, threat intelligence, and proactive defense measures. Key deliverables include threat reports, security assessment findings, incident response plans, and compliance documentation. We work closely with you to develop and implement a comprehensive cybersecurity strategy tailored to your specific needs.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We protect your digital assets.</h3>
                                    <p className="mb-30">The following details the responsibilities a cybersecurity expert may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Risk Assessment</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Security Strategy Development</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Implementation of Security Measures</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Continuous Monitoring and Threat Detection</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Incident Response and Management</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Compliance and Reporting</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Security Awareness Training</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100" src="/assets/img/service/service-details-1-2.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*======== / Service Details Area ========*/}
                    {/*==============================
    Project Area 03
    ==============================*/}
                    {/* <section className="project-area-3 pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-50 text-center">
                                <h2 className="title">Other Projects</h2>
                            </div>
                            <div className="row gy-60 justify-content-between masonary-active">
                                <div className="col-lg-6 filter-item">
                                    <div className="project-card-item8 shine-animate-item wow img-custom-anim-top">
                                        <div className="project-card-thumb">
                                            <Link className="shine-animate" href="/project-details">
                                                <img className="w-100" src="/assets/img/project/project9-1.jpg" alt="img" />
                                            </Link>
                                        </div>
                                        <div className="project-card-content">
                                            <h4 className="project-card-title"><Link href="/project-details">Cybersecurity Project 1</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 filter-item">
                                    <div className="project-card-item8 mt-lg-200 shine-animate-item wow img-custom-anim-right">
                                        <div className="project-card-thumb">
                                            <Link className="shine-animate" href="/project-details">
                                                <img className="w-100" src="/assets/img/project/project9-2.jpg" alt="img" />
                                            </Link>
                                        </div>
                                        <div className="project-card-content">
                                            <h4 className="project-card-title"><Link href="/project-details">Cybersecurity Project 2</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            </Layout>
        </>
    )
}
