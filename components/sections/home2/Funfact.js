import CounterUp from "@/components/elements/CounterUp"
import { useTranslations } from "next-intl";

export default function Funfact() {
    const t = useTranslations("About.FunFact");
  return (
    <>
        <section className="funfact-style-two centred pb_70">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-two">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={5} /><span>{t("clients_worldwide.value")}</span>
                                    </div>
                                    <p>{t("clients_worldwide.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-two">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={99} /><span>{t("satisfied_clients.value")}</span>
                                    </div>
                                    <p>{t("satisfied_clients.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-two">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={80} /><span>{t("money_invested.value")}</span>
                                    </div>
                                    <p>{t("money_invested.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-two">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={800} /><span>{t("expert_traders.value")}</span>
                                    </div>
                                    <p>{t("expert_traders.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
