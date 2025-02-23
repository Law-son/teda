import Link from "next/link"
import { useTranslations } from 'next-intl';

export default function Award() {
    const t = useTranslations('Home.Award');

  return (
    <>
      <section className="award-section pt_100 pb_100">
            <div className="auto-container">
                <div className="sec-title centred pb_60">
                    <span className="sub-title mb_14">{t('sectionTitle')}</span>
                    <h2>{t('subTitle')}</h2>
                </div>
                <div className="table-outer">
                    <table className="award-table">
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td><h3><Link href="/">{t('awards.0.title')}</Link></h3></td>
                                <td><span>x1</span></td>
                                <td><figure className="image-box"><Link href="/"><img src="assets/images/icons/Awards_1.png" alt=""/></Link></figure></td>
                                <td>{t('awards.0.year')}</td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td><h3><Link href="/">{t('awards.1.title')}</Link></h3></td>
                                <td><span>x4</span></td>
                                <td><figure className="image-box"><Link href="/"><img src="assets/images/icons/AWARD_3.png" alt=""/></Link></figure></td>
                                <td>{t('awards.1.year')}</td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td><h3><Link href="/">{t('awards.2.title')}</Link></h3></td>
                                <td><span>x4</span></td>
                                <td><figure className="image-box" style={{ display: "flex", justifyContent: "start" }}><Link href="/"><img src="assets/images/icons/Award_5.png" alt="" style={{ maxWidth: "95px", marginLeft: "10px" }}/></Link></figure></td>
                                <td>{t('awards.2.year')}</td>
                            </tr>
                        </tbody>    
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}
