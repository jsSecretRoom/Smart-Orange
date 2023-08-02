function sliderSwiper(buttonLeft, buttonRight, carousel, slides) {
    const leftButtons = document.querySelectorAll(buttonLeft);
    const rightButtons = document.querySelectorAll(buttonRight);

    function slideToNext(container) {
        const slideItems = container.querySelectorAll(slides);
        const slideWidth = slideItems[0].offsetWidth;

        container.style.transition = 'transform 0.5s ease';
        container.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(function() {
            container.appendChild(slideItems[0]);
            container.style.transition = 'none';
            container.style.transform = 'translateX(0)';
        }, 500);
    }

    function slideToPrev(container) {
        const slideItems = container.querySelectorAll(slides);
        const slideWidth = slideItems[0].offsetWidth;

        const lastSlide = slideItems[slideItems.length - 1];
        container.insertBefore(lastSlide, slideItems[0]);

        container.style.transition = 'none';
        container.style.transform = `translateX(-${slideWidth}px`;

        setTimeout(function() {
            container.style.transition = 'transform 0.5s ease';
            container.style.transform = 'translateX(0)';
        }, 50);
    }

    function addClickListener(buttons, callback) {
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const section = button.closest('.slider-section');
                const container = section.querySelector(carousel);
                callback(container);
            });
        });
    }

    addClickListener(leftButtons, slideToPrev);
    addClickListener(rightButtons, slideToNext);
}
export default sliderSwiper;
