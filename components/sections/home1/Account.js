import Link from "next/link"

export default function Account() {
  return (
    <>
      <section className="account-section pt_100 pb_70">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title pb_60 centred">
                    <span className="sub-title mb_14">Account</span>
                    <h2>Trading Accounts</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                        <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-01"></i></div>
                                <h3><Link href="/account-details">Professional Account</Link></h3>
                                <p>Traders with professional accounts gain access to a wide range of benefits, including enhanced trading platforms</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                        <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-03"></i></div>
                                <h3><Link href="/account-details">Demo Account</Link></h3>
                                <p>Trading demo accounts are particularly valuable for novice traders who are new to the world of investing.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}
