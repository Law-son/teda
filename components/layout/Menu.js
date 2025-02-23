import { Link } from '../../navigation';
import { useTranslations } from 'next-intl';

export default function Menu() {
    const t = useTranslations('Navbar');

    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">{t('home')}</Link>
                </li>
                <li className="dropdown"><Link href="#">{t('trading')}</Link>
                    <ul>
                        <li><Link href="/platform">{t('platform')}</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">{t('market')}</Link>
                    <ul>
                        <li><Link href="/markets">{t('marketsPlace')}</Link></li>
                        <li><Link href="/markets-details">{t('marketsDetails')}</Link></li>
                    </ul>
                </li>
                <li><Link href="/about" >{t('aboutUs')}</Link></li>
                <li><Link href="https://direct.lc.chat/18997386/">{t('contact')}</Link></li>
            </ul>
        </>
    )
}
