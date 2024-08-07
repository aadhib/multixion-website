import TestimonialSlider from '../slider/TestimonialSlider'

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-area-1 pt-120 pb-120 dark-bg">
                <div className="section__title testimonial-section__title">
                    <div className="container">
                        <h2 className="title text-white wow img-custom-anim-left">OUR TESTIMONIAL</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-60 gy-30 align-items-end">
                        {/* <div className="col-xl-5">
                            <div className="testimonial-thumb-1-1 wow img-custom-anim-left">
                                <img src="/assets/img/others/testimonial1-1.jpg" alt="img" />
                            </div>
                        </div> */}
                        <div className="col-xl-20">
                            <div className="testimonial__item-wrap wow img-custom-anim-right">
                                <TestimonialSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
