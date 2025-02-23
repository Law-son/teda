import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Apps() {
    const t = useTranslations("About.Apps");

    return (
        <section className="apps-style-two pt_150 pb_150">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}></div>
            <figure className="image-layer d-none d-md-block" style={{ right: "100px", bottom: "30px" }}>
                <img src="assets/images/resource/uno01.png" alt="" style={{ width: "650px" }} />
            </figure>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box ml_80">
                                <div className="sec-title light pb_40">
                                    <span className="sub-title mb_14">{t("sub_title")}</span>
                                    <h2>{t("section_title")}</h2>
                                    <p>{t("description")}</p>
                                </div>
                                <div className="btn-box">
                                    <Link href={t("download_buttons.app_store.url")} className="apple-store">
                                        <img src="assets/images/icons/icon-7.png" alt="" />
                                        <span>{t("download_buttons.app_store.text")}</span>
                                    </Link>
                                    <Link href={t("download_buttons.google_play.url")} className="play-store">
                                        <img src="assets/images/icons/icon-8.png" alt="" />
                                        <span>{t("download_buttons.google_play.text")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
