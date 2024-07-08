'use client'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRef, useState } from "react"
import { onSubmit } from "./actions"

export default function Contact() {
    const [submitStatus, setSubmitStatus] = useState({ success: false, error: false });
    const { success, error } = submitStatus;
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmitHandler: (formData: FormData) => void = (formData) => {
        const submitFormAction = onSubmit(formData);
        submitFormAction.then(
            () => {
                setSubmitStatus({ ...submitStatus, success: true });
                formRef.current?.reset()
            },
            () => {
                setSubmitStatus({ ...submitStatus, error: true });
            }
        )
    }


    return (
        <>

            <Layout breadcrumbTitle="Contact">
                <div>
                    <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-60">
                                <h2 className="title">LET'S GET IN TOUCH</h2>
                            </div>
                            <div className="row gy-60">
                                <div className="col-lg-6">
                                    <div className="contact__info-wrap">
                                        <ul className="list-wrap">
                                            <li>
                                                <h6 className="title">Email</h6>
                                                <Link href="mailto:service@multixion.com">service@multixion.com</Link>
                                            </li>
                                            <li>
                                                <h6 className="title">Headquarters</h6>
                                                Office No. 7
                                                2nd Floor, 5391, <br className="d-md-block d-none" /> Dammam 32241, Saudi Arabia
                                            </li>
                                            <li>
                                                <Link href="https://www.google.com/maps" className="link-btn">
                                                    See on Google Map
                                                    <i className="icon-arrow-top-left" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-form-wrap">
                                        <div className="section__title mb-60">
                                            <h4 className="subtitle">Got a project you want to collaborate on?
                                                Or just fancy a chat?</h4>
                                        </div>
                                        <form action={onSubmitHandler} ref={formRef}>
                                            <div className="row gy-35">
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name *" required />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation *" required />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                                    <input type="number" className="form-control style-border" name="phone_number" id="phone_number" placeholder="Phone Number *" required />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email *" required />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                                    <textarea name="message" placeholder="Message" id="contactForm" className="form-control style-border" />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-three square-btn mt-60">
                                                SEND MESSAGE
                                            </button>
                                            {success && <p className="form-action-message form-success-message">Your form has beeen submitted, We will get in touch with you shortly!</p>}
                                            {error && <p className="form-action-message form-error-message">Your form was not submitted, Please try again after a while!</p>}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Contact Section ========*/}

                    {/* contact-map */}
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}