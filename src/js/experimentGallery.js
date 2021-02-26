import { Swiper, Navigation, EffectFade, Thumbs } from 'swiper';

Swiper.use([Navigation, EffectFade, Thumbs]);

export default function productGallery() {
    const elements = Array.from(document.querySelectorAll('.js-experiment-gallery'));

    elements.forEach(element => {
        const thumbsContainer = element.querySelector('.experiment__gallery-thumbs-slider .swiper-container');

        const mainContainer = element.querySelector('.experiment__gallery-main-slider .swiper-container');

        const mainSliderOptions = {
            watchOverflow: true,
            // effect: 'fade',
            speed: 400,
            threshold: 5,
            fadeEffect: {
                crossFade: true
            },
            loop: true,
            thumbs: {},
            navigation: {
                nextEl: element.querySelector('.experiment__gallery-arrow--next'),
                prevEl: element.querySelector('.experiment__gallery-arrow--prev')
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            spaceBetween: 10,
            slidesPerView: 5,
            threshold: 10,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: window.matchMedia("(max-width: 640px)").matches ? 'horizontal' : 'vertical',
            centerInsufficientSlides: true,
            loop: true,
            breakpoints: {
                641: {
                    spaceBetween: 24,
                }
            }
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
