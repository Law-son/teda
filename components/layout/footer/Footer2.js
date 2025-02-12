import Link from "next/link"

export default function Footer2() {
    const disableClick = (event) => {
        event.preventDefault();
      };

    return (
        <>           
            
            <footer className="main-footer">
                <div className="widget-section p_relative pt_70 pb_80">
                    <div className="container">
                        <div className="row justify-content-between">
                            {/* First Column - Links and Description */}
                            <div className="col-lg-6 col-md-6 col-12 order-lg-0 order-0 mb-4 mb-lg-0">
                                <div className="row mb-3">
                                    {/* All columns in single row on large screens */}
                                    <div className="col-6 col-md-3 col-lg-3 mb-3">
                                        <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>
                                            Trading
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link href="/platform" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                    Platforms
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-6 col-md-3 col-lg-3 mb-3">
                                        <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>
                                            Market
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link href="/markets" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                    Market Place
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/markets-details" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                    Market Details
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-6 col-md-3 col-lg-3 mb-3">
                                        <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>
                                            About Us
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link href="/about" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                    About us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-6 col-md-3 col-lg-3 mb-3">
                                        <h5 className="mb-2" style={{ fontWeight: 'bold', color: 'black' }}>
                                            Contact
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link href="https://direct.lc.chat/18997386/" style={{ color: '#6c6e72', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.target.style.color = '#22823a'}
                                                    onMouseLeave={(e) => e.target.style.color = '#6c6e72'}>
                                                    Contact us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ fontWeight: 'lighter' }} className="text-black medium mt-5">
                                    TEDA Global Limited is a company regulated by the Money
                                    Services Business (MSB) in the United States, with registration
                                    number 31000280102867. Its registered office is located at 7
                                    Copperfield Road, Coventry, West Midlands, England, CV2 4AQ
                                </div>
                            </div>

                            {/* Second Column - Logo and Description */}
                            <div className="col-lg-5 col-12 order-lg-1 order-1 mb-4 mb-lg-0">
                                <div className="mb-3">
                                    <figure className="footer-logo"><Link href="/"><img src="assets/images/logo-3.png" alt="" /></Link></figure>
                                </div>
                                <div style={{ fontWeight: 'lighter' }} className="text-black medium mt-5">
                                    TEDA offers a diverse selection of financial
                                    instruments for trading, including CFDs on
                                    currency pairs, energies, commodities, and
                                    indices, Our main goal is to deliver accessible
                                    services that cater to our clients' trading and
                                    investment needs, With a client-focused
                                    business model, we are committed to
                                    continually enhancing our offerings based on
                                    client feedback and demands.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner">
                            <p>Copyright {new Date().getFullYear()} <Link href="/">TEDA</Link> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
