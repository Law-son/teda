import { Link } from '../../../navigation';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { LanguageSelector } from "@/components/elements/LanguageTranslator"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>

            {/* main header */}
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* header lower */}
                <div className="header-lower">
                    <div className="large-container">
                        <div className="outer-box">
                            <figure className="logo-box"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></figure>
                            <div className="menu-area clearfix">
                                <div className="position-relative z-index-1000" style={{ marginRight: '20px' }}>
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

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="large-container">
                        <div className="outer-box">
                            <figure className="logo-box"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                            <div className="menu-area clearfix">
                                <div className="position-relative z-index-1000" style={{ marginRight: '20px' }}>
                                    <LanguageSelector />
                                </div>
                                <nav className="main-menu clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
