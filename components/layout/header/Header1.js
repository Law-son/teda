import { Link } from '../../../navigation';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { LanguageSelector } from "@/components/elements/LanguageTranslator"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>

            {/* main header */}
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>

                <div className="header-top">
                    <div className="large-container">
                        <div className="top-inner d-flex align-items-center justify-content-between">
                            <div className="support-box">
                                <div className="icon-box"><i className="icon-07"></i></div>
                                <a href="tel:02079461234">020 7946 1234</a>
                            </div>
                            <div className="position-relative z-index-1000">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                </div>


                {/* header lower */}
                <div className="header-lower">
                    <div className="large-container">
                        <div className="outer-box">
                            <figure className="logo-box"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                            <div className="menu-area clearfix">
                                {/* mobile navigation toggler */}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* <div className="search-btn ml_30"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom">
                    <div className="large-container">
                        <div className="bottom-inner">
                            <div className="inner-box">
                                <ul className="stock-list">
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 394833.90 <span>(+0.93 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391323.90 <span>(-0.12 <i className="icon-05"></i>)</span></li>
                                    <li className="lower">US30 391467.90 <span>(-0.35 <i className="icon-05"></i>)</span></li>
                                    <li className="upper">US30 354033.90 <span>(+0.55 <i className="icon-06"></i>)</span></li>
                                    <li className="upper">US30 394346.90 <span>(+0.76 <i className="icon-06"></i>)</span></li>
                                    <li className="lower">US30 391300.90 <span>(-0.43 <i className="icon-05"></i>)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="large-container">
                        <div className="outer-box">
                            <figure className="logo-box"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                            <div className="menu-area clearfix">
                                <nav className="main-menu clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* <div className="search-btn ml_30"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
