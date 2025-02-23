'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home3/Cta"
import News from "@/components/sections/home1/News"
import Subscribe from "@/components/sections/home1/Subscribe"
import { useTranslations } from "next-intl";

export default function Markets() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const disableClick = (event) => {
        event.preventDefault();
    };
    const t = useTranslations("Market.Platforms");
    const p = useTranslations("Market.Range");
    const a = useTranslations("Market.Apps");
    const s = useTranslations('Navbar');

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle={s('marketsPlace')}>

                <section className="platform-section alternat-2 pt_90 pb_130">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60">
                            <span className="sub-title mb_14">{t('sub_title')}</span>
                            <h2>{t('section_title')}</h2>
                        </div>
                        <div className="tabs-box">
                            <div className="row clearfix">
                                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="content-box">
                                                <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt="" /></figure>
                                                <h2>{t('app.title')}</h2>
                                                <p>{t('app.description')}</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>{t('app.features.0')}</li>
                                                    <li>{t('app.features.1')}</li>
                                                    <li>{t('app.features.2')}</li>
                                                    <li>{t('app.features.3')}</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="copy">
                                            <div className="content-box">
                                                <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt="" /></figure>
                                                <h2>{t('teda_copy.title')}</h2>
                                                <p>{t('teda_copy.description')}</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>{t('teda_copy.features.0')}</li>
                                                    <li>{t('teda_copy.features.1')}</li>
                                                    <li>{t('teda_copy.features.2')}</li>
                                                    <li>{t('teda_copy.features.3')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 col-xl-4 col-lg-12 col-md-12 btn-column">
                                    <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
                                        <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>{t('tab_buttons.webtrader')}</li>
                                        <li style={{ display: "none" }} onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>{t('tab_buttons.mt4_mt')}</li>
                                        <li className="tab-btn">{t('tab_buttons.copy')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Cta />

                <section className="markets-section centred pt_130 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">{p('title')}</span>
                            <h2>{p('subtitle')}</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/markets-details"><img src="assets/images/resource/markets-1.jpg" alt="" /></Link></figure>
                                            <figure className="overlay-image"><Link href="/markets-details"><img src="assets/images/resource/markets-1.jpg" alt="" /></Link></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">{p('markets.forex.title')}</a></h3>
                                            <div className="btn-box mt-3">
                                                <Link href="/markets-details" className="theme-btn btn-two">{p('markets.forex.button')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/markets-details"><img src="assets/images/resource/markets-2.jpg" alt="" /></Link></figure>
                                            <figure className="overlay-image"><Link href="/markets-details"><img src="assets/images/resource/markets-2.jpg" alt="" /></Link></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">{p('markets.indices.title')}</a></h3>
                                            <div className="btn-box mt-3">
                                                <Link href="/markets-details" className="theme-btn btn-two">{p('markets.indices.button')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/markets-details"><img src="assets/images/resource/markets-3.jpg" alt="" /></Link></figure>
                                            <figure className="overlay-image"><Link href="/markets-details"><img src="assets/images/resource/markets-3.jpg" alt="" /></Link></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">{p('markets.cryptocurrencies.title')}</a></h3>
                                            <div className="btn-box mt-3">
                                                <Link href="/markets-details" className="theme-btn btn-two">{p('markets.cryptocurrencies.button')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/markets-details"><img src="assets/images/resource/markets-4.jpg" alt="" /></Link></figure>
                                            <figure className="overlay-image"><Link href="/markets-details"><img src="assets/images/resource/markets-4.jpg" alt="" /></Link></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">{p('markets.commodities.title')}</a></h3>
                                            <div className="btn-box mt-3">
                                                <Link href="/markets-details" className="theme-btn btn-two">{p('markets.commodities.button')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="apps-section alternat-2 pt_120 pb_120">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                    <figure className="image-layer1 d-none d-md-block">
                        <img src="assets/images/resource/uno01.png" style={{ width: "550px" }} alt="" />
                    </figure>
                    <div className="auto-container">
                        <div className="content_block_two">
                            <div className="content-box">
                                <div className="sec-title light pb_40">
                                    <span className="sub-title mb_14">{a("title")}</span>
                                    <h2>{a("subtitle")}</h2>
                                    <p>{a("description")}</p>
                                </div>
                                <ul className="download-list clearfix">
                                    <li>
                                        <Link href={a("download_links.apple_store")}>
                                            <i className="fab fa-apple"></i>
                                        </Link>
                                    </li>
                                    <li style={{ display: "none" }}>
                                        <Link href="/markets">
                                            <img src="assets/images/icons/icon-2.png" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={a("download_links.google_play")}>
                                            <i className="fab fa-android"></i>
                                        </Link>
                                    </li>
                                    <li style={{ display: "none" }}>
                                        <Link href="/markets">
                                            <img src="assets/images/icons/icon-6.png" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <News />
                <Subscribe />

            </Layout>
        </div>
    )
}