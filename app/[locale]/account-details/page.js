import { Link } from '../../../navigation';
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
import { useTranslations } from "next-intl";

export default function Account_details() {
    const t = useTranslations("Account_Details");

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Account Details">

                <section className="account-details account-style-two account-page clear-bg pt_100 pb_100">
                    <div className="auto-container">
                        <div className="upper-box centred mb_65">
                            <div className="row clearfix justify-content-center">
                                <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-16"></i></div>
                                            <h3><Link href="/account-details">{t("professional_account")}</Link></h3>
                                            <p>{t("professional_account_description")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-18"></i></div>
                                            <h3><Link href="/account-details">{t("demo_account")}</Link></h3>
                                            <p>{t("demo_account_description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-box align-1 pt_65">
                                <p>{t("account_overview")}</p>
                            </div>
                        </div>
                        <figure className="image-box mb_60"><img src="assets/images/resource/account-1.jpg" alt="" /></figure>
                        <div className="account-info">
                            <h2>{t("professional_account_info")}</h2>
                            <div className="info-inner">
                                <ul className="info-list clearfix">
                                    <li><span>{t("info_list.initial_deposit")}</span><span>{t("info_values.initial_deposit")}</span></li>
                                    <li><span>{t("info_list.leverage")}</span><span>{t("info_values.leverage")}</span></li>
                                    <li><span>{t("info_list.spread")}</span><span>{t("info_values.spread")}</span></li>
                                    <li><span>{t("info_list.multi_language_cc")}</span><span>{t("info_values.multi_language_cc")}</span></li>
                                </ul>
                                <ul className="info-list clearfix">
                                    <li><span>{t("info_list.order_volume")}</span><span>{t("info_values.order_volume")}</span></li>
                                    <li><span>{t("info_list.support")}</span><span>{t("info_values.support")}</span></li>
                                    <li><span>{t("info_list.friendly_expert")}</span><span>{t("info_values.friendly_expert")}</span></li>
                                    <li><span>{t("info_list.award_winner")}</span><span>{t("info_values.award_winner")}</span></li>
                                </ul>
                            </div>
                            <h3>{t("benefits_title")}</h3>
                            <ul className="list-item clearfix">
                                <li>{t("benefits.portfolio_diversification")}</li>
                                <li>{t("benefits.access_global_markets")}</li>
                                <li>{t("benefits.flexibility_control")}</li>
                                <li>{t("benefits.potential_profit")}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Subscribe />

            </Layout>
        </div>
    )
}