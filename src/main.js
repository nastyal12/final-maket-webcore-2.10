// --- src/main.js ---

// 1. Импортируем стили, чтобы Webpack их "увидел"
import './style.scss';

// 2. Импортируем Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // Импортируем стили Swiper

// 3. Вся наша логика
document.addEventListener("DOMContentLoaded", () => {

    /**
     * === 1. Логика Мобильного Меню ===
     */
    const menuOpenBtn = document.querySelector('.header__icon--menu');
    const menuCloseBtn = document.querySelector('.mobile-menu .close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (menuOpenBtn && mobileMenu && menuCloseBtn) {

        menuOpenBtn.addEventListener('click', () => {
            mobileMenu.classList.add('mobile-menu--is-open');
            body.classList.add('no-scroll');
        });

        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu--is-open');
            body.classList.remove('no-scroll');
        });
    }

    /**
     * === 2. Логика "Читать далее" для текста ===
     */
    const moreBtn = document.querySelector('.services__more');
    const textContainer = document.querySelector('.services__text');

    if (moreBtn && textContainer) {
        moreBtn.addEventListener('click', (e) => {
            e.preventDefault();

            textContainer.classList.toggle('services__text--expanded');

            if (textContainer.classList.contains('services__text--expanded')) {
                moreBtn.textContent = 'Скрыть';
            } else {
                moreBtn.textContent = 'Читать далее';
            }
        });
    }

    /**
     * === 3. Логика "Показать все / Скрыть" для Брендов (Desktop) ===
     */
    const toggleBtn = document.querySelector('.brands-section .toggle-btn');
    const brandsList = document.querySelector('.brands-section .brands-list');

    if (toggleBtn && brandsList) {
        toggleBtn.addEventListener('click', () => {

            brandsList.classList.toggle('brands-list--expanded');

            if (brandsList.classList.contains('brands-list--expanded')) {
                toggleBtn.textContent = 'Скрыть';
                toggleBtn.classList.add('toggle-btn--toggled');
            } else {
                toggleBtn.textContent = 'Показать все';
                toggleBtn.classList.remove('toggle-btn--toggled');
            }
        });
    }

    /**
     * === 4. Логика Слайдера Брендов (Mobile) ===
     */
    let swiperInstance = null;
    const mobileBreakpoint = 768;

    function initSwiper() {
        // Убедимся, что Swiper загружен
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library not found.');
            return;
        }

        if (window.innerWidth < mobileBreakpoint && !swiperInstance) {
            // Создаем слайдер
            swiperInstance = new Swiper(".brands-swiper", {
                loop: true,
                slidesPerView: 1.3,
                spaceBetween: 16,

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        } else if (window.innerWidth >= mobileBreakpoint && swiperInstance) {
            // Уничтожаем слайдер на десктопе
            swiperInstance.destroy();
            swiperInstance = null;
        }
    }

    // Запускаем проверку при загрузке
    initSwiper();

    // И при изменении размера окна
    window.addEventListener('resize', initSwiper);

}); // <- Вот эта строка