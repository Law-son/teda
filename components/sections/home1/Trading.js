import Link from "next/link"
import { useTranslations } from 'next-intl';

export default function Trading() {
    const t = useTranslations('Home.ThingsWeTrade');

  return (
    <>
      <section className="trading-section pt_100 pb_100">
            <div className="auto-container">
                <div className="sec-title centred pb_60">
                    <span className="sub-title mb_14">{t('subTitle')}</span>
                    <h2>{t('sectionTitle')}</h2>
                </div>
                <div className="inner-container clearfix">
                    <div className="trading-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/trading-1.png" alt=""/></figure>
                            <h3><a href="markets-details.html">{t('crypto.title')}</a></h3>
                            <p style={{visibility: 'hidden'}}>One of the primary methods of gold trading is through the spot</p>
                            <div className="btn-box"><Link href="/markets-details" className="theme-btn btn-one">{t('crypto.buttonText')}</Link></div>
                        </div>
                    </div>
                    <div className="trading-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/trading-2.png" alt=""/></figure>
                            <h3><a href="markets-details.html">{t('shares.title')}</a></h3>
                            <p style={{visibility: 'hidden'}}>One of the primary methods of gold trading is through the spot</p>
                            <div className="btn-box"><Link href="/markets-details" className="theme-btn btn-one">{t('shares.buttonText')}</Link></div>
                        </div>
                    </div>
                    <div className="trading-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/trading-3.png" alt=""/></figure>
                            <h3><a href="markets-details.html">{t('gold.title')}</a></h3>
                            <p style={{visibility: 'hidden'}}>One of the primary methods of gold trading is through the spot</p>
                            <div className="btn-box"><Link href="/markets-details" className="theme-btn btn-one">{t('gold.buttonText')}</Link></div>
                        </div>
                    </div>
                    <div className="trading-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/trading-4.png" alt=""/></figure>
                            <h3><a href="markets-details.html">{t('currency.title')}</a></h3>
                            <p style={{visibility: 'hidden'}}>One of the primary methods of gold trading is through the spot</p>
                            <div className="btn-box"><Link href="/markets-details" className="theme-btn btn-one">{t('currency.buttonText')}</Link></div>
                        </div>
                    </div>
                    <div className="trading-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/trading-5.png" alt=""/></figure>
                            <h3><a href="markets-details.html">{t('silver.title')}</a></h3>
                            <p style={{visibility: 'hidden'}}>One of the primary methods of gold trading is through the spot</p>
                            <div className="btn-box"><Link href="/markets-details" className="theme-btn btn-one">{t('silver.buttonText')}</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
