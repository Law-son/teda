import CounterUp from "@/components/elements/CounterUp"

export default function Funfact() {
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
                                        <CounterUp end={5} /><span>M+</span>
                                    </div>
                                    <p>Client World Wide</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-two">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={99} /><span>%</span>
                                    </div>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-two">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={80} /><span>M+</span>
                                    </div>
                                    <p>Money Invested</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-two">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={800} /><span>+</span>
                                    </div>
                                    <p>Expert Traders</p>
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
