'use client'
import { useState } from "react"
import Link from "next/link"

export default function Process() {

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
            <section className="process-style-two pt_80 pb_100">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                                <div className="image-box pr_130 mr_40 pl_150">
                                    <figure className="image image-1"><img src="/assets/images/resource/mock-up.jpg" alt="" style={{ width: '1800px', height: '500px' }} /></figure>
                                </div>
                            </div>
                        </div>
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
                                                    <p>As a brokerage firm or trading platform. We are dedicated to providing innovative and user-friendly trading.</p>
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
                                                    <p>We are a professional forex trading platform dedicated to providing comprehensive forex investment services. With advanced technological support, a secure trading environment, and global market coverage, we offer clients flexible trading tools and high-quality customer service to help them achieve steady growth in the forex market. </p>
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
                                                    <p>Through in-depth analysis and precise strategic guidance, we help clients make informed decisions in a complex market environment, maximizing their investment returns. Our goal is to provide practical solutions for each client, helping them maintain a competitive edge in an increasingly competitive industry.</p>
                                                    {/* <a href="faq.html">Learn More</a> */}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
