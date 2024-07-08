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
                                        <h2 className="title">IT CONSULTING</h2>
                                        <p className="sec-text">Leverage our expert IT consulting services to optimize your technology infrastructure, enhance performance, and achieve your business goals.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Consulting Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> IT Strategy and Planning</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Technology Assessment and Implementation</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> IT Project Management</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Business Process Optimization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/1-2.png" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Consulting Deliverables</h3>
                                <p className="mb-30">Our IT consulting services encompass a comprehensive approach to optimize your technology environment. From strategic IT planning to project management and implementation, we provide the expertise needed to drive your business forward.</p>
                                <p>We assess your current IT infrastructure and processes, identifying areas for improvement and recommending tailored solutions. Our consultants work closely with your team to develop and implement IT strategies that align with your business objectives, ensuring efficient and effective use of technology resources.</p>
                                <h3 className="page-title mt-60 mb-30">Strategic Approach</h3>
                                <p className="mb-0">Our approach to IT consulting is grounded in a deep understanding of your business needs and goals. Key deliverables include detailed IT assessments, strategic IT plans, project roadmaps, and performance metrics. We partner with you to ensure your technology investments deliver maximum value and support your long-term success.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We drive your business forward with technology.</h3>
                                    <p className="mb-30">The following details the responsibilities an IT consultant may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Initial Consultation</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> IT Assessment</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Strategy Development</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Implementation Planning</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Execution and Monitoring</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Performance Analysis</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Continuous Improvement</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100 bw-filter" src="/assets/img/service/1-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
