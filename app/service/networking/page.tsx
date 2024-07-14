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
                                        <h2 className="title">NETWORKING</h2>
                                        <p className="sec-text">Enhance your business connectivity and performance with our comprehensive networking solutions.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Networking Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Network Design and Implementation</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Network Security</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Wireless Networking</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Network Maintenance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/7-2.jpg" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Networking Deliverables</h3>
                                <p className="mb-30">Our networking services cover the entire spectrum of network design, implementation, and maintenance. We ensure robust, secure, and efficient networks tailored to meet the specific needs of your business.</p>
                                <p>Our services include network design and implementation, ensuring optimal performance and scalability. We also provide comprehensive network security solutions to protect your data and infrastructure from cyber threats. Our wireless networking solutions offer flexibility and mobility for your business operations.</p>
                                <h3 className="page-title mt-60 mb-30">Security Deliverables</h3>
                                <p className="mb-0">Network security is a critical component of our services. We implement advanced security measures, including firewalls, intrusion detection systems, and encryption protocols, to safeguard your network from potential threats. Key deliverables include network security assessments, risk mitigation strategies, and ongoing security monitoring.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We optimize your business connectivity.</h3>
                                    <p className="mb-30">The following details the responsibilities a networking specialist may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Requirement Analysis</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Network Design</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Implementation</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Testing and QA</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Security Implementation</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Performance Tuning</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Maintenance and Support</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100 bw-filter" src="/assets/img/service/7-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
