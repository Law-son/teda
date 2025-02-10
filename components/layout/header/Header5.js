import { Link } from '../../../navigation';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { LanguageSelector } from "@/components/elements/LanguageTranslator"

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>

            {/* main header */}
            <header className={`main-header header-style-five ${scroll ? "fixed-header" : ""}`}>

                {/* <div className="header-top">
                <div className="large-container">
                    <div className="top-inner">
                        <div className="option-block">
                            <div className="support-box">
                                <div className="icon-box"><i className="icon-07"></i></div>
                                <a href="tel:02079461234">020 7946 1234</a>
                            </div>
                        </div>
                        <div className="position-relative z-index-1000">
                                <LanguageSelector />
                            </div>
                    </div>
                </div>
            </div> */}


                {/* header lower */}
                <div className="header-lower">
                    <div className="large-container">
                        <div className="outer-box">
                            <figure className="logo-box"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></figure>
                            <div className="d-flex flex-row align-items-center">
                                <LanguageSelector />
                                <div style={{ marginRight: '20px' }}></div>
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
                                </div>
                            </div>
                            {/* <div className="menu-right-content">
                            <div className="search-btn mr_25"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div>
                            <div className="btn-box"><Link href="/index-5" className="theme-btn btn-one">Open Account</Link></div>
                        </div> */}
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
                            </div>
                            {/* <div className="menu-right-content">
                            <div className="search-btn mr_25"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div>
                            <div className="btn-box"><Link href="/index-5" className="theme-btn btn-one">Open Account</Link></div>
                        </div> */}
                        </div>
                    </div>
                </div>

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
