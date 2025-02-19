'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Apps from "@/components/sections/home2/Apps"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Platform() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Platform">

                <About />

                <section className="trading-style-four pt_0 pb_100">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60">
                            <span className="sub-title mb_14">Learn More</span>
                            <h2>What is Trading</h2>
                        </div>
                        <div className="tabs-box">
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>Financial Markets</h2>
                                                    <p>The financial markets are the cornerstone of global capital flows, offering diverse trading opportunities across equities, forex, and commodities. Our platform delivers real-time price discovery, deep liquidity access, and advanced execution technology, ensuring that traders and investors operate with maximum efficiency in a highly competitive landscape.</p>
                                                    <p>Whether you are a seasoned institutional trader or an emerging market participant, our suite of cutting-edge analytical tools, AI-driven insights, and risk management solutions enables you to make data-driven decisions with confidence.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div className="image-box ml_70">
                                                <figure className="image"><img src="assets/images/resource/finance-image.jpg" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>What is Forex</h2>
                                                    <p>Not sure which is the right TEDA platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                                    <p>Check out our handy platform comparison table which will show you all the differences.</p>
                                                    {/* <div className="btn-box">
                                                        <Link href="/account-details" className="theme-btn btn-one mr_20">Start Trading</Link>
                                                        <Link href="/index-2" className="theme-btn btn-two">Learn More</Link>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div className="image-box ml_70">
                                                <figure className="image"><img src="assets/images/resource/finance-image.jpg" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="overview">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>Tools Overview</h2>
                                                    <p>Not sure which is the right TEDA platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                                    <p>Check out our handy platform comparison table which will show you all the differences.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div className="image-box ml_70">
                                                <figure className="image"><img src="assets/images/resource/dashboard-2.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="comparison">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>Platform Comparison</h2>
                                                    <p>Not sure which is the right TEDA platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                                    <p>Check out our handy platform comparison table which will show you all the differences.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div className="image-box ml_70">
                                                <figure className="image"><img src="assets/images/resource/dashboard-2.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Apps />

                <section className="account-style-three pt_100 pb_70">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_eight">
                                    <div className="content-box mr_60">
                                        <div className="sec-title pb_20">
                                            <span className="sub-title mb_14">Accounts</span>
                                            <h2>Level up your trading with <span>Account</span></h2>
                                        </div>
                                        <div className="text-box">
                                            <ul className="list-style-one mb_40 clearfix">
                                                <li>Trade with one tap, anywhere, anytime</li>
                                                <li>Seamlessly manage your account and portfolio</li>
                                                <li>Stay ahead with real-time charts and indicators</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                                <div className="inner-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 account-block">
                                            <div className="account-block-one pb_1 wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-01"></i></div>
                                                    <h3><Link href="/account-details">Professional Account</Link></h3>
                                                    <p>Traders with professional accounts gain access to a wide range of benefits, including enhanced trading platforms</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 account-block pt_75">
                                            <div className="account-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-03"></i></div>
                                                    <h3><Link href="/account-details">Demo Account</Link></h3>
                                                    <p>Trading demo accounts are particularly valuable for novice traders who are new to the world of investing.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe />
            </Layout>
        </div>
    )
}