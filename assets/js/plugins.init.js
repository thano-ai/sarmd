/* SARMD Custom Init: Tiny Slider only */
(function () {
    var projectCarousel = document.querySelector('.tiny-three-item');
    if (!projectCarousel) {
        return;
    }

    tns({
        container: projectCarousel,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        nav: true,
        navPosition: 'bottom',
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },
            767: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });
})();



