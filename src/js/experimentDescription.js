
import gsap from 'gsap';

export default function experimentDescription() {
    const elements = Array.from(document.querySelectorAll('.js-experiment-description'));

    elements.forEach(element => {
        const btn = element.querySelector('.experiment__description-show-more');
        const content = element.querySelector('.experiment__description-hidden-content-wrapper');
        const originalText = btn.textContent;
        const openText = btn.getAttribute('data-open-text');
        const originalHeight = content.offsetHeight;


        btn.addEventListener('click', event => {
            event.preventDefault();
            if (element.classList.contains('active')) {
                gsap.to(content, {
                    height: originalHeight,
                    duration: 0.5
                })
                element.classList.remove('active');
                btn.textContent = originalText;
            } else {
                gsap.to(content, {
                    height: 'auto',
                    duration: 0.5
                })
                element.classList.add('active');
                btn.textContent = openText;
            }
        })
    })
}