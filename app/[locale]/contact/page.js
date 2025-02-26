'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Contact() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact Us">

                <section className="contact-section pt_90 pb_100">
                    <div className="auto-container">
                        {/* <div className="info-inner pb_25">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 info-column">
                            <div className="single-info">
                                <div className="icon-box"><i className="icon-45"></i></div>
                                <h4>Corporate Office</h4>
                                <p>0233 Brisbane Cir. Shiloh,Australia 81063</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 info-column">
                            <div className="single-info">
                                <div className="icon-box"><i className="icon-45"></i></div>
                                <h4>Main Warehouse</h4>
                                <p>10445 Brisbane Cir. Shiloh, Australia</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 info-column">
                            <div className="single-info">
                                <div className="icon-box"><i className="icon-46"></i></div>
                                <h4>Email Address</h4>
                                <p><Link href="mailto:support@example.com">support@example.com</Link><Link href="mailto:contact@example.com">contact@example.com</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 info-column">
                            <div className="single-info">
                                <div className="icon-box"><i className="icon-47"></i></div>
                                <h4>Phone Number</h4>
                                <p><Link href="tel:+2085440141">+(208) 544 -0141</Link><Link href="tel:+2085440142">+(208) 544 -0142</Link></p>
                            </div>
                        </div>
                    </div>
                </div> */}
                        <div className="form-inner pb_70">
                            <form method="post" action="sendemail.php" id="contact-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Your Name <span>*</span></label>
                                        <input type="text" name="username" placeholder="" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Phone <span>*</span></label>
                                        <input type="text" name="phone" placeholder="" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Email Address <span>*</span></label>
                                        <input type="email" name="email" placeholder="" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Subject <span>*</span></label>
                                        <input type="text" name="subject" placeholder="" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Write Message <span>*</span></label>
                                        <textarea name="message" placeholder=""></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn pt_18">
                                        <button type="submit" className="theme-btn btn-one" name="submit-form">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="map-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7789219520146!2d-1.4694768235733852!3d52.42832097197185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b85902eb1df%3A0xa7c75c81f08c64b2!2s7%20Copperfield%20Rd%2C%20Coventry%20CV2%204AQ%2C%20UK!5e0!3m2!1sen!2s!4v1707068242825!5m2!1sen!2s"
                                height={570}
                                style={{ border: 0, width: "100%" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                    </div>
                </section>

                <Subscribe />

            </Layout>
        </div>
    )
}