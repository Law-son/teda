import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Account() {
    const t = useTranslations("About.Accounts");

    return (
        <section className="account-style-three pt_100 pb_70">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                        <div className="inner-content">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-one pb_1 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-01"></i></div>
                                            <h3><Link href="/account-details">{t("professional_account.title")}</Link></h3>
                                            <p>{t("professional_account.description")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 account-block pt_75">
                                    <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-03"></i></div>
                                            <h3><Link href="/account-details">{t("demo_account.title")}</Link></h3>
                                            <p>{t("demo_account.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_eight">
                            <div className="content-box ml_60">
                                <div className="sec-title pb_20">
                                    <span className="sub-title mb_14">{t("sub_title")}</span>
                                    <h2>{t("section_title")}</h2>
                                </div>
                                <div className="text-box">
                                    <ul className="list-style-one mb_40 clearfix">
                                        <li>{t("features.trade_anywhere")}</li>
                                        <li>{t("features.manage_portfolio")}</li>
                                        <li>{t("features.real_time_charts")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
