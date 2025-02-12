"use client";

import Link from "next/link";

export default function Apps() {
  const disableClick = (event) => {
    event.preventDefault();
  }; 

  return (
    <>
      <section className="apps-section">
        <div className="auto-container">
          <div className="inner-container">
            <div
              className="shape"
              style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}
            ></div>
            <figure className="image-layer1 d-none d-md-block">
              <img src="assets/images/resource/uno01.png" style={{ width: "550px" }} alt="" />
            </figure>
            <div className="content_block_two">
              <div className="content-box">
                <div className="sec-title light pb_40">
                  <span className="sub-title mb_14">Download App</span>
                  <h2>Download Trading App</h2>
                  <p>
                    We use cookies to understand how you use our website and to give you the best possible experience.
                  </p>
                </div>
                <ul className="download-list clearfix">
                  <li>
                    <Link href="https://apps.apple.com/cn/app/exchangespaw/id6741582233" onClick={disableClick}>
                      <i className="fab fa-apple"></i>
                    </Link>
                  </li>
                  <li style={{ display: "none" }}>
                    <Link href="/" onClick={disableClick}>
                      <img src="assets/images/icons/icon-2.png" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5" onClick={disableClick}>
                      <i className="fab fa-android"></i>
                    </Link>
                  </li>
                  <li style={{ display: "none" }}>
                    <Link href="/" onClick={disableClick}>
                      <img src="assets/images/icons/icon-6.png" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
