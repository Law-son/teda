"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer1() {
    const t = useTranslations("Footer");

    return (
        <footer className="main-footer">
            <div className="widget-section p_relative pt_70 pb_80">
                <div className="container">
                    <div className="row justify-between">
                        {/* First Column - Links and Description */}
                        <div className="col-lg-6 col-md-6 col-12 mb-4">
                            <div className="row mb-3">
                                {/* Trading */}
                                <div className="col-6 col-md-3 col-lg-3 mb-3">
                                    <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>{t("trading")}</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link href="/platform" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                {t("platforms")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* Market */}
                                <div className="col-6 col-md-3 col-lg-3 mb-3">
                                    <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>{t("market")}</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link href="/markets" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                {t("market_place")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/markets-details" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                {t("market_details")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* About Us */}
                                <div className="col-6 col-md-3 col-lg-3 mb-3">
                                    <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>{t("about")}</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link href="/about" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                {t("about_us")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* Contact */}
                                <div className="col-6 col-md-3 col-lg-3 mb-3">
                                    <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>{t("contact")}</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link href="https://direct.lc.chat/18997386/" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                {t("contact_us")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-black font-light mt-5">{t("company_info")}</p>
                        </div>
                        {/* Second Column - Logo and Description */}
                        <div className="col-lg-5 col-12 mb-4">
                            <figure className="footer-logo">
                                <Link href="/"><img src="assets/images/logo-3.png" alt="TEDA Logo" /></Link>
                            </figure>
                            <p className="text-black font-light mt-5">{t("company_description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <p>{t("copyright", { year: new Date().getFullYear() })} <Link href="/">TEDA</Link> {t("rights_reserved")}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
