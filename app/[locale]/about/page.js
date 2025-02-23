'use client'
import { Link } from '../../../navigation';
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Funfact from "@/components/sections/home2/Funfact"
import Cta from "@/components/sections/home3/Cta"
import Account from "@/components/sections/home3/Account"
import Apps from "@/components/sections/home3/Apps"
import Testimonial from "@/components/sections/home3/Testimonial"
import Subscribe from "@/components/sections/home1/Subscribe"
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("About.AboutUs");
    const p = useTranslations("About.Team");
    const s = useTranslations('Navbar');
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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle={s('aboutUs')}>

                <section className="about-style-three pt_90 pb_100">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_seven">
                                    <div className="content-box">
                                        <div className="sec-title pb_50">
                                            <span className="sub-title mb_14">{t("title")}</span>
                                            <h2>{t("reputation_experience")} <span>{t("experience")}</span></h2>
                                        </div>
                                        <ul className="accordion-box">
                                            <li className="accordion block">
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>{t("who_we_are")}</h3>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>{t("who_we_are_description")}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>{t("what_we_do")}</h3>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>{t("what_we_do_description")}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>{t("how_it_works")}</h3>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>{t("how_it_works_description")}</p>
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
                            <span className="sub-title mb_14">{p("sub_title")}</span>
                            <h2>{p("section_title")}</h2>
                        </div>
                        <div className="row clearfix">
                            {[
                                "olivia_quinn",
                                "nathan_hayes",
                                "ava_jensen",
                                "sophia_knight",
                                "ethan_brooks",
                                "aronic_kehan",
                            ].map((member, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 team-block">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src={`assets/images/team/team-${index + 1}.jpg`} alt="" />
                                            </figure>
                                            <div className="content-box">
                                                <h3>{p(`members.${member}.name`)}</h3>
                                                <span className="designation">{p(`members.${member}.designation`)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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