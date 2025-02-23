import Link from "next/link"
import { useTranslations } from 'next-intl';

export default function Breadcrumb({ breadcrumbTitle }) {
    const s = useTranslations('Navbar');
    return (
        <> 

        <section className="page-title centred pt_90 pb_0">
            <div className="pattern-layer rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>{breadcrumbTitle}</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">{s('home')}</Link></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    )
}
