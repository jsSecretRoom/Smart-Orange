import sliderSwiper from './module/slider';
import setupDropdownMenus from './module/tabbsAnimation';
import scrollAnimation from './module/scrollAnimation';

document.addEventListener('DOMContentLoaded', function() {
    sliderSwiper('.left-arrov', '.right-arrov', '.bilding-img', '.slid');
    setupDropdownMenus('.category', '.category-button', '.category-list');

    scrollAnimation('.info-kompany-block');
    scrollAnimation('.nav-tabs');
    scrollAnimation('.project-naim');
    scrollAnimation('.bilding-img');
    scrollAnimation('.plans'); 
    scrollAnimation('form');
    scrollAnimation('.foto-block');
});