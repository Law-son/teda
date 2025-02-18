import Link from "next/link"

export default function Apps() {
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
                                        <span className="sub-title mb_14">Download App</span>
                                        <h2>Download Trading App</h2>
                                        <p>We use cookines to understand how you use our website and to give you the best possible experience.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="https://apps.apple.com/cn/app/exchangespaw/id6741582233" className="apple-store">
                                            <img src="assets/images/icons/icon-7.png" alt="" />
                                            <span>Download on</span>
                                            App Store
                                        </Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5" className="play-store">
                                            <img src="assets/images/icons/icon-8.png" alt="" />
                                            <span>Get it on</span>
                                            Google Play
                                        </Link>
                                        <Link href="https://pc.tedafx.com/">
                                        <img src="assets/images/icons/web-icon.png" alt="" style={{height: "40px", width: "40px", paddingRight: "2px"}} />
                                            <span>Access it on the</span>
                                            Web
                                        </Link>
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
