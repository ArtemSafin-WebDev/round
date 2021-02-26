import { lockScroll, unlockScroll } from './scrollBlocker';

export default function mobileMenu() {
    const btn = document.querySelector('.js-menu-burger');
    const menu = document.querySelector('.page-header__mobile-menu');
    let menuOpen = false;

    const openMenu = () => {
        menuOpen = true;
        document.body.classList.add('mobile-menu-open');
        lockScroll(menu);
    };
    const closeMenu = () => {
        menuOpen = false;
        document.body.classList.remove('mobile-menu-open');
        unlockScroll();
    };

    if (btn) {
        btn.addEventListener('click', event => {
            event.preventDefault();
            if (!menuOpen) {
                openMenu();
            } else {
                closeMenu();
            }
        })
    }
}