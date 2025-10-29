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
    /* --- src/main.js --- */

    /**
     * === 4. Логика ВСЕХ Слайдеров (Mobile) ===
     */

    // Переменные для хранения слайдеров
    let brandsSwiper = null;
    let typesSwiper = null;
    let pricesSwiper = null;

    const mobileBreakpoint = 768; // Точка, где слайдеры отключаются

    // Функция, которая настраивает Swiper
    function initSwiper(selector, options) {
        if (typeof Swiper === 'undefined') return null;

        return new Swiper(selector, {
            // Общие настройки для всех
            loop: true,
            slidesPerView: 1.3,
            spaceBetween: 16,
            pagination: {
                el: `${selector} .swiper-pagination`,
                clickable: true,
            },
            // Добавляем специфичные настройки, если они есть
            ...options,
        });
    }

    // Главная функция, которая включает/выключает слайдеры
    function checkSwipers() {
        if (window.innerWidth < mobileBreakpoint) {
            // --- ЭКРАН МОБИЛЬНЫЙ ---

            // Включаем слайдер Брендов, если он еще не включен
            if (!brandsSwiper) {
                brandsSwiper = initSwiper(".brands-swiper");
            }
            // Включаем слайдер Типов ремонта
            if (!typesSwiper) {
                typesSwiper = initSwiper(".types-swiper");
            }
            // Включаем слайдер Цен
            if (!pricesSwiper) {
                pricesSwiper = initSwiper(".prices-swiper");
            }

        } else {
            // --- ЭКРАН ДЕСКТОПНЫЙ ---

            // Уничтожаем слайдеры, если они были созданы
            if (brandsSwiper) {
                brandsSwiper.destroy();
                brandsSwiper = null;
            }
            if (typesSwiper) {
                typesSwiper.destroy();
                typesSwiper = null;
            }
            if (pricesSwiper) {
                pricesSwiper.destroy();
                pricesSwiper = null;
            }
        }
    }

    // Запускаем проверку при загрузке
    checkSwipers();

    // И при изменении размера окна
    window.addEventListener('resize', checkSwipers);

});
/**
 * === 5. Логика "Показать все / Скрыть" для Различных видов техники (Desktop) ===
 */
const typesToggleBtn = document.querySelector('.types-section .toggle-btn');
const typesList = document.querySelector('.types-section .types-list');

if (typesToggleBtn && typesList) {
    typesToggleBtn.addEventListener('click', () => {

        typesList.classList.toggle('types-list--expanded');

        if (typesList.classList.contains('types-list--expanded')) {
            typesToggleBtn.textContent = 'Скрыть';
            typesToggleBtn.classList.add('toggle-btn--toggled');
        } else {
            typesToggleBtn.textContent = 'Показать все';
            typesToggleBtn.classList.remove('toggle-btn--toggled');
        }
    });
}