import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Apps() {
    const t = useTranslations("Platforms.Apps");

    return (
        <>
            <section className="apps-style-two pt_80 pb_80">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/finance-image2.png" alt="" /></figure>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                            <div className="content_block_four">
                                <div className="content-box ml_80">
                                    <div className="sec-title light pb_40">
                                        <span className="sub-title mb_14">{t("download_app")}</span>
                                        <h2>{t("download_trading_app")}</h2>
                                        <p>{t("cookie_notice")}</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="https://apps.apple.com/cn/app/exchangespaw/id6741582233" className="apple-store">
                                            <img src="assets/images/icons/icon-7.png" alt="" />
                                            <span>{t("download_on")}</span>
                                            {t("app_store")}
                                        </Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5" className="play-store">
                                            <img src="assets/images/icons/icon-8.png" alt="" />
                                            <span>{t("get_it_on")}</span>
                                            {t("google_play")}
                                        </Link>
                                        <Link href="https://pc.tedafx.com/">
                                            <img src="assets/images/icons/web-icon.png" alt="" style={{ height: "40px", width: "40px", paddingRight: "2px" }} />
                                            <span>{t("access_on")}</span>
                                            {t("web")}
                                        </Link>
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
