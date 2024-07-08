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
                                        <h2 className="title">WEB DEVELOPMENT</h2>
                                        <p className="sec-text">Let's explore the world of cutting-edge web development and its impact on the digital landscape.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Web Development Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Frontend Development</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Backend Development</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Full-Stack Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/3-2.jpg" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Web Development Deliverables</h3>
                                <p className="mb-30">Web development encompasses a range of tasks from developing simple static pages to complex web applications. Below is a short analysis of its key components, including frontend and backend development.</p>
                                <p>Frontend development involves creating the visual elements of a website, ensuring it is responsive and user-friendly. Backend development focuses on server-side logic, database interactions, and ensuring that everything functions correctly.</p>
                                <h3 className="page-title mt-60 mb-30">Development Process</h3>
                                <p className="mb-0">The development process involves several stages, including requirement analysis, design, coding, testing, and deployment. Effective communication with stakeholders and developers is critical to the success of the project. Documentation typically includes a project overview, wireframes, and version history.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We build the digital presence of your business.</h3>
                                    <p className="mb-30">Below are the responsibilities of a web developer at each phase of a project:</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Requirement Analysis</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> System Design</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Coding</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Testing</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Deployment</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Maintenance</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Documentation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100 bw-filter" src="/assets/img/service/3-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
