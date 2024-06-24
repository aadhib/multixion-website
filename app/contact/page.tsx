import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Contact">
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
                                                <h6 className="title">Phone</h6>
                                                <Link href="/tel:0123456789">+(2) 578-365-379</Link>
                                            </li>
                                            <li>
                                                <h6 className="title">Email</h6>
                                                <Link href="mailto:service@multixion.com">service@multixion.com</Link>
                                            </li>
                                            <li>
                                                <h6 className="title">Headquarters</h6>
                                                27 Division St, New York, <br className="d-md-block d-none" /> NY 10002, USA
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
                                        <form action="mail.php" method="POST" className="contact__form ajax-contact">
                                            <div className="row gy-35">
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation*" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                                    <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-three square-btn mt-60">
                                                SEND MESSAGE
                                            </button>
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