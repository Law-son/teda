import React from 'react'
import { useTranslations } from 'next-intl';

export default function Process() {
    const t = useTranslations('Home.Process');
  return (
    <>
      <section className="process-section">
            <div className="auto-container">
                <div className="inner-container pt_100 pb_70">
                    <div className="sec-title centred pb_60">
                        <span className="sub-title mb_14">{t('sectionTitle')}</span>
                        <h2>{t('subTitle')}</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="process-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <span className="count-text">1</span>
                                        <h3>{t('steps.0.title')}</h3>
                                        <p>{t('steps.0.description')}</p>
                                    </div>
                                </div>
                                <div className="process-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <span className="count-text">2</span>
                                        <h3>{t('steps.1.title')}</h3>
                                        <p>{t('steps.1.description')}</p>
                                    </div>
                                </div>
                                <div className="process-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <span className="count-text">3</span>
                                        <h3>{t('steps.2.title')}</h3>
                                        <p>{t('steps.2.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/process-2.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
