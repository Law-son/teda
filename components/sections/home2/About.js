'use client'
import Link from "next/link"
import { useState } from "react"
export default function About() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
        <section className="about-style-two pt_60 pb_100">
            <div className="auto-container">
                <div className="sec-title pb_60 centred">
                    <span className="sub-title mb_14">Platforms</span>
                    <h2>Trading Platforms</h2>
                </div>
                <div className="tabs-box">
                    <div className="row clearfix">
                        <div className="col-lg-5 col-md-12 col-sm-12 btn-column">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>FXT Application <i className="icon-26"></i></li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Web <i className="icon-26"></i></li>
                                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>FBS Personal Area <i className="icon-26"></i></li>
                                {/* <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Meta Trader 5 <i className="icon-26"></i></li> */}
                            </ul>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="content-box">
                                        <h2>FXT App</h2>
                                        <p>Navigate the financial waves with FXT’s premier trading app, designed to put the power of the markets in your palm.</p>
                                        <figure className="image-box"><Link href="assets/images/resource/dashboard-1.png" className="lightbox-image" data-fancybox='gallery'><img src="assets/images/resource/dashboard-1.png" alt=""/></Link></figure>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="trader">
                                    <div className="content-box">
                                        <h2>Web</h2>
                                        <p>Ride the financial waves with a top-tier trading platform, crafted to give you full control of the markets at your fingertips. </p>
                                        <figure className="image-box"><Link href="assets/images/resource/dashboard-1.png" className="lightbox-image" data-fancybox='gallery'><img src="assets/images/resource/dashboard-1.png" alt=""/></Link></figure>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="personal">
                                    <div className="content-box">
                                        <h2>FBS Personal Area</h2>
                                        <p>Steer through the financial waves with FXT’s elite trading app, built to put the market’s power right in your hands. </p>
                                        <figure className="image-box"><Link href="assets/images/resource/dashboard-1.png" className="lightbox-image" data-fancybox='gallery'><img src="assets/images/resource/dashboard-1.png" alt=""/></Link></figure>
                                    </div>
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
