'use client'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
};

export default function Testimonial() {
    const t = useTranslations("About.Testimonials");

    return (
        <section className="testimonial-section centred pt_100 pb_100">
            <div className="auto-container">
                <div className="sec-title pb_60">
                    <span className="sub-title mb_14">{t("sub_title")}</span>
                    <h2>{t("section_title")}</h2>
                </div>
                <div className="inner-container">
                    <div className="thumb-box">
                        <div className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></div>
                        <div className="thumb thumb-2"><img src="assets/images/resource/thumb-2.png" alt="" /></div>
                        <div className="thumb thumb-3"><img src="assets/images/resource/thumb-3.png" alt="" /></div>
                        <div className="thumb thumb-4"><img src="assets/images/resource/thumb-4.png" alt="" /></div>
                        <div className="thumb thumb-5"><img src="assets/images/resource/thumb-5.png" alt="" /></div>
                        <div className="thumb thumb-6"><img src="assets/images/resource/thumb-6.png" alt="" /></div>
                        <div className="thumb thumb-7"><img src="assets/images/resource/thumb-7.png" alt="" /></div>
                        <div className="thumb thumb-8"><img src="assets/images/resource/thumb-8.png" alt="" /></div>
                    </div>
                    <Swiper {...swiperOptions} className="theme_carousel testimonial-carousel">
                        <SwiperSlide className="slide-item p_relative">
                            <div className="testimonial-content">
                                <h2>“{t("testimonial_1.quote")}”</h2>
                                <p>{t("testimonial_1.description")}</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
