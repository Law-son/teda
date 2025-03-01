'use client'
import Link from "next/link"
import { useState } from "react"
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("Platforms.About");
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => { 
        setActiveIndex(index);
    };

    return (
        <>
            <section className="about-style-two pt_60 pb_100">
                <div className="auto-container">
                    <div className="sec-title pb_60 centred">
                        <span className="sub-title mb_14">{t("platforms")}</span>
                        <h2>{t("trading_platforms")}</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="row clearfix">
                            <div className="col-lg-5 col-md-12 col-sm-12 btn-column">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>{t("tabs.application")} <i className="icon-26"></i></li>
                                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>{t("tabs.web")} <i className="icon-26"></i></li>
                                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>{t("tabs.fbs_personal_area")} <i className="icon-26"></i></li>
                                </ul>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                <div className="tabs-content">
                                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                        <div className="content-box">
                                            <h2>{t("content.app.title")}</h2>
                                            <p>{t("content.app.description")}</p>
                                            <figure className="image-box"><Link href="assets/images/resource/dashboard-1.png" className="lightbox-image" data-fancybox='gallery'><img src="assets/images/resource/dashboard-1.png" alt=""/></Link></figure>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="trader">
                                        <div className="content-box">
                                            <h2>{t("content.web.title")}</h2>
                                            <p>{t("content.web.description")}</p>
                                            <figure className="image-box"><Link href="assets/images/resource/dashboard-1.png" className="lightbox-image" data-fancybox='gallery'><img src="assets/images/resource/dashboard-1.png" alt=""/></Link></figure>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="personal">
                                        <div className="content-box">
                                            <h2>{t("content.fbs_personal_area.title")}</h2>
                                            <p>{t("content.fbs_personal_area.description")}</p>
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
    );
}
