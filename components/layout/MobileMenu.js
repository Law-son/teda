'use client'
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo-2.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/" onClick={handleMobileMenu}> Home</Link></li>
                                {/* <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/index-2">Trading Platforms</Link></li>
                                    <li><Link href="/index-3">Create Account</Link></li>
                                    <li><Link href="/index-4">Market Spreads</Link></li>
                                    <li><Link href="/index-5">Trading Proficiency</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#" onClick={handleMobileMenu}>Trading</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li><Link href="/platform" onClick={handleMobileMenu}>Platform</Link></li>
                                    <li><Link href="/account" onClick={handleMobileMenu}>Account</Link></li>
                                    <li><Link href="/account-details" onClick={handleMobileMenu}>Account Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#" onClick={handleMobileMenu}>Market</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/markets" onClick={handleMobileMenu}>Markets Place</Link></li>
                                        <li><Link href="/markets-details" onClick={handleMobileMenu}>Markets Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#" onClick={handleMobileMenu}>Pages</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/education" onClick={handleMobileMenu}>Education</Link></li>
                                        <li><Link href="/education-details" onClick={handleMobileMenu}>Book Details</Link></li>
                                        <li><Link href="/team" onClick={handleMobileMenu}>Our Expert Team</Link></li>
                                        <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                                        <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
                                        <li><Link href="/faq" onClick={handleMobileMenu}>FAQ's</Link></li>
                                        {/* <li><Link href="/error">404</Link></li> */}
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#" onClick={handleMobileMenu}>Blog</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <li><Link href="/blog" onClick={handleMobileMenu}>Blog Grid</Link></li>
                                    <li><Link href="/blog-2" onClick={handleMobileMenu}>Blog Standard</Link></li>
                                    <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}