import Link from "next/link"

export default function Hero() {
    return (
        <>
            <section className="hero-wrapper hero-1">
                <div className="container">
                    <div className="hero-style1">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s"><span className="text-theme">
                                    INNOVATE, INTEGRATE,
                                </span> INSPIRE</h1>
                            </div>
                            <div className="col-lg-4 align-self-end">
                                <p className="hero-text wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                    Our company is a dynamic fusion of
                                    innovation and expertise, committed to crafting visual experiences that leave an
                                    indelible mark.
                                </p>
                            </div>
                        </div>
                        <div className="tg-button-wrap">
                            <Link href="/about" className="btn border-white wow img-custom-anim-right">
                                <img src="/assets/img/icon/star-lock.svg" alt="img" />VISION 2030
                            </Link>
                            <Link href="/about" className="btn border-white wow img-custom-anim-right">
                                <i className="icon-globe" />BUILDING FOR IMPACT
                            </Link>
                        </div>
                        <div className="hero-thumb1 wow img-custom-anim-top position-relative">
                            <div className="thumb">
                                <img src="/assets/img/hero/hero-1-1.jpg" alt="hero" />
                            </div>
                            <Link className="btn big-circle-btn gsap-magnetic" href="/about"><i className="icon-arrow-top-left" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
