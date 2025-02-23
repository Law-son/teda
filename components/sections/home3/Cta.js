import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Cta() {
    const t = useTranslations("About.CTA");

    return (
        <section className="cta-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                    <div className="icon-box"><img src="assets/images/icons/coin-1.png" alt=""/></div>
                    <h2>{t("headline")}</h2>
                </div>
            </div>
        </section>
    );
}
