'use client'
import { useState } from "react"
import VideoPopup from "@/components/elements/VideoPopup"

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
        <>
            <section className="about-style-three pt_130 pb_100">
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
                                    <div className="video-content">
                                        <VideoPopup />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
