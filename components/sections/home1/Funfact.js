import CounterUp from "@/components/elements/CounterUp"
import { useTranslations } from 'next-intl';

export default function Funfact() {
    const t = useTranslations('Home.Funfact');

  return (
    <>
      <section className="funfact-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={150} />+<span className="text">{t('countries.label')}</span>
                                    </div>
                                    <p>{t('countries.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={40} />+<span className="text">{t('investment.label')}</span>
                                    </div>
                                    <p>{t('investment.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={90} />+<span className="text">{t('awards.label')}</span>
                                    </div>
                                    <p>{t('awards.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

