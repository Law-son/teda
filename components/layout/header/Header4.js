import { Link } from '../../../navigation';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { LanguageSelector } from "@/components/elements/LanguageTranslator"

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-four"> */}

            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>

                {/* header lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/">
                                    <img src="/assets/images/logo-4.png" alt="/" />
                                </Link>
                            </figure>
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
                            <div className="position-relative z-index-1000">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                </div>



                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/">
                                    <img src="assets/images/logo-4.png" alt="/" />
                                </Link>
                            </figure>
                            <div className="menu-area clearfix">

                                <div className="position-relative z-index-1000">
                                    <LanguageSelector />
                                </div>

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
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />



        </>
    )
}
