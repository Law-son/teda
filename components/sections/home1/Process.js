import React from 'react'

export default function Process() {
  return (
    <>
      <section className="process-section">
            <div className="auto-container">
                <div className="inner-container pt_100 pb_70">
                    <div className="sec-title centred pb_60">
                        <span className="sub-title mb_14">The Process</span>
                        <h2>How It Works</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="process-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <span className="count-text">1</span>
                                        <h3>Sign up, It's Free!</h3>
                                        <p>Our team will set up your account and help you build job to  easy-to-use web dashboard.</p>
                                    </div>
                                </div>
                                <div className="process-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <span className="count-text">2</span>
                                        <h3>Find best Deals and Invest</h3>
                                        <p>Create and Trade anywhere from 1-100% openings with just a few clicks. customize your own.</p>
                                    </div>
                                </div>
                                <div className="process-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <span className="count-text">3</span>
                                        <h3>Get your profit back</h3>
                                        <p>Relying on professional technical analysis and precise trading strategies, we help seize market opportunities, optimize risk management, improve trading efficiency, and steadily recover while achieving continuous profitability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/process-2.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
