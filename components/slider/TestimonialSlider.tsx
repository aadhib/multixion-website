'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import testimonials from "@/util/testimonials.json"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
}

export default function TestimonialSlider() {
    return (
        <>
            <div className="swiper testimonial-active" id="testimonialSlider1">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial__item">
                                <div className="testimonial__icon">
                                    <img src="/assets/img/icon/quote-left.svg" alt="img" className="injectable" />
                                </div>
                                <div className="testimonial__content">
                                    <p className="testimonial__text">{testimonial.text}</p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author-content">
                                            <h4 className="testimonial__title">{testimonial.clientName}</h4>
                                            <span className="testimonial__desig">{testimonial.designation} at {testimonial.companyName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="slider-area btn-wrap">
                <button className="testimonial-button-next btn border-btn icon-btn slider-prev default"><i className="fas fa-angle-left" /></button>
                <button className="testimonial-button-prev btn border-btn icon-btn slider-next default"><i className="fas fa-angle-right" /></button>
            </div>
        </>
    )
}
