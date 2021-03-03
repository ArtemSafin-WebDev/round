import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import competitionSlider from './competitionSlider';
import addProject from './addProject';
import experimentGallery from './experimentGallery';
import experimentDescription from './experimentDescription';
import mobileMenu from './mobileMenu';
import showPassword from './showPassword';
import avatarUpload from './avatarUpload';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    competitionSlider();
    addProject();
    experimentGallery();
    experimentDescription();
    mobileMenu();
    showPassword();
    avatarUpload();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
