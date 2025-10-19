// Импортируем Swiper и нужные модули
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Инициализация слайдера
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
});