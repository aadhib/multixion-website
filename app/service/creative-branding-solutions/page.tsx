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
                                        <h2 className="title">CREATIVE BRANDING SOLUTIONS</h2>
                                        <p className="sec-text">Unleash the power of creativity in branding to build a unique and memorable brand identity that resonates with your audience.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Branding Services</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Creative Brand Strategy</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Visual Identity Design</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Logo and Graphic Design</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Brand Storytelling</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100 bw-filter" src="/assets/img/service/9-2.png" alt="img" />
                                <h3 className="page-title mt-60 mb-30">Branding Deliverables</h3>
                                <p className="mb-30">Creative branding solutions involve a blend of strategic thinking and innovative design to create a distinctive brand presence. From brand strategy to visual identity and brand storytelling, each component plays a crucial role in crafting a cohesive brand experience.</p>
                                <p>Creative brand strategy focuses on understanding your target audience, defining brand values, and developing a unique brand proposition. Visual identity design includes the creation of logos, color schemes, typography, and other visual elements that represent the brand's personality. Brand storytelling ensures that your brand communicates its values and vision effectively across all touchpoints.</p>
                                <h3 className="page-title mt-60 mb-30">Strategic Approach</h3>
                                <p className="mb-0">Our approach to creative branding is grounded in deep research and a passion for design. We deliver comprehensive brand strategies, visually appealing identities, and compelling brand narratives that resonate with your audience. Key deliverables include brand guidelines, logo designs, brand messaging frameworks, and visual identity systems.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We create brands that inspire and engage.</h3>
                                    <p className="mb-30">The following details the responsibilities a branding expert may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Brand Research</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Creative Brand Strategy Development</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Visual Identity Creation</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Logo and Graphic Design</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Brand Storytelling</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Brand Guidelines Documentation</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Brand Launch and Rollout</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100 bw-filter" src="/assets/img/service/9-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
