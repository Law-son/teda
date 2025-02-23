'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Apps from "@/components/sections/home2/Apps"
import Subscribe from "@/components/sections/home1/Subscribe"
import { useTranslations } from "next-intl";

export default function Platform() {
    const t = useTranslations("Platforms.Main");
    const p = useTranslations("Platforms.Accounts");
    const s = useTranslations('Navbar');

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle={s('platform')}>

                <About />

                <section className="trading-style-four pt_0 pb_100">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60">
                            <span className="sub-title mb_14">{t('learn_more')}</span>
                            <h2>{t('what_is_trading')}</h2>
                        </div>
                        <div className="tabs-box">
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>{t('financial_markets.title')}</h2>
                                                    <p>{t('financial_markets.description_1')}</p>
                                                    <p>{t('financial_markets.description_2')}</p>
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
                                                    <h2>{t('what_is_forex.title')}</h2>
                                                    <p>{t('what_is_forex.description_1')}</p>
                                                    <p>{t('what_is_forex.description_2')}</p>
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
                                                    <h2>{t('tools_overview.title')}</h2>
                                                    <p>{t('tools_overview.description_1')}</p>
                                                    <p>{t('tools_overview.description_2')}</p>
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
                                                    <h2>{t('platform_comparison.title')}</h2>
                                                    <p>{t('platform_comparison.description_1')}</p>
                                                    <p>{t('platform_comparison.description_2')}</p>
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
                                            <span className="sub-title mb_14">{p("title")}</span>
                                            <h2>{p("level_up_trading")}</h2>
                                        </div>
                                        <div className="text-box">
                                            <ul className="list-style-one mb_40 clearfix">
                                                <li>{p("trade_anywhere")}</li>
                                                <li>{p("manage_portfolio")}</li>
                                                <li>{p("real_time_charts")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                                <div className="inner-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 account-block">
                                            <div className="account-block-one pb_1 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-01"></i></div>
                                                    <h3><Link href="/account-details">{p("professional_account")}</Link></h3>
                                                    <p>{p("professional_account_description")}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 account-block pt_75">
                                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-03"></i></div>
                                                    <h3><Link href="/account-details">{p("demo_account")}</Link></h3>
                                                    <p>{p("demo_account_description")}</p>
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