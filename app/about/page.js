'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"
import Funfact from "@/components/sections/home2/Funfact"
import Cta from "@/components/sections/home3/Cta"
import Account from "@/components/sections/home3/Account"
import Apps from "@/components/sections/home3/Apps"
import Testimonial from "@/components/sections/home3/Testimonial"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function About() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">

                <section className="about-style-three pt_90 pb_100">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_seven">
                                    <div className="content-box">
                                        <div className="sec-title pb_50">
                                            <span className="sub-title mb_14">About US</span>
                                            <h2>Our reputation is built on <span>Experience</span></h2>
                                        </div>
                                        <ul className="accordion-box">
                                            <li className="accordion block">
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>Who We Are</h3>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>A team of experts passionate about cryptocurrency investment, dedicated to helping individuals and businesses thrive in the digital asset space.</p>
                                                        {/* <a href="faq.html">Learn More</a> */}
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>What We Do</h3>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>We offer strategic guidance and insights to help clients make informed decisions and maximize returns in the ever-evolving crypto market.</p>
                                                        {/* <a href="faq.html">Learn More</a> */}
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>How It Works</h3>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>Through data-driven analysis and tailored strategies, we identify profitable opportunities and optimize risk to grow our clients' crypto portfolios.</p>
                                                        {/* <a href="faq.html">Learn More</a> */}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                                <div className="video_block_one">
                                    <div className="video-box z_1 p_relative ml_50 centred">
                                        <figure className="image-box"><img src="assets/images/resource/video-1.png" alt="" /></figure>
                                        {/* <div className="video-content">
                                            <VideoPopup />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Funfact />
                <Cta />
                <Account />

                <section className="team-section pt_0 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_60 centred">
                            <span className="sub-title mb_14">Our expert team</span>
                            <h2>Our Talented Team Member</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <h3><Link href="/team-details">Olivia Quinn</Link></h3>
                                            <span className="designation">Forex Trader</span>
                                            {/* <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <h3><Link href="/team-details">Nathan Hayes</Link></h3>
                                            <span className="designation">Consultant</span>
                                            {/* <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <h3><Link href="/team-details">Ava Jensen</Link></h3>
                                            <span className="designation">Trading Assistant</span>
                                            {/* <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <h3><Link href="/team-details">Sophia Knight</Link></h3>
                                            <span className="designation">President of Trade</span>
                                            {/* <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-5.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <h3><Link href="/team-details">Ethan brooks</Link></h3>
                                            <span className="designation">Marketing Coordinator</span>
                                            {/* <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-6.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <h3><Link href="/team-details">Aronic kehan</Link></h3>
                                            <span className="designation">Business Assistant</span>
                                            {/* <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Apps />
                <Testimonial />

                <Subscribe />

            </Layout>
        </div>
    )
}