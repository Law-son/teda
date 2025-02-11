import { Link } from '../../navigation';

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link>
                </li>
                <li className="dropdown"><Link href="#">Trading</Link>
                    <ul>
                        <li><Link href="/platform">Platform</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Market</Link>
                    <ul>
                        <li><Link href="/markets">Markets Place</Link></li>
                        <li><Link href="/markets-details">Markets Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/about" >About Us</Link></li>
                <li><Link href="https://direct.lc.chat/18997386/">Contact</Link></li>
            </ul>
        </>
    )
}
