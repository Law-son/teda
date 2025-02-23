import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Account() {
    const t = useTranslations('Home.Account');

    return (
        <>
            <section className="account-section pt_100 pb_70">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                <div className="auto-container">
                    <div className="sec-title pb_60 centred">
                        <span className="sub-title mb_14">{t('subTitle')}</span>
                        <h2>{t('sectionTitle')}</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-01"></i></div>
                                    <h3><Link href="/account-details">{t('professionalAccount.title')}</Link></h3>
                                    <p>{t('professionalAccount.description')}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-03"></i></div>
                                    <h3><Link href="/account-details">{t('demoAccount.title')}</Link></h3>
                                    <p>{t('demoAccount.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

