import { Swiper, Navigation } from 'swiper';
Swiper.use([Navigation]);

export default function competitionSlider() {
    const elements = Array.from(document.querySelectorAll('.js-competition-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            loop: true,
            speed: 600,
            navigation: {
                nextEl: element.querySelector('.competition__slider-arrow--next'),
                prevEl: element.querySelector('.competition__slider-arrow--prev')
            }
        });
    });
}
