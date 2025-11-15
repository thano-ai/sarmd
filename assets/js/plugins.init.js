/* SARMD Custom Init: Tiny Slider */
(function () {
    var isRTL = document.documentElement.dir === 'rtl';

    var projectsCarouselContainer = document.getElementById('projectsCarousel');

    if (projectsCarouselContainer) {
        var projectsCarousel = tns({
            container: '#projectsCarousel',
            items: 1,
            controls: false,
            mouseDrag: true,
            loop: true,
            rewind: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 3000,
            nav: true,
            navPosition: 'bottom',
            rtl: isRTL,
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

        var prevControl = document.querySelector('.projects-carousel-prev');
        var nextControl = document.querySelector('.projects-carousel-next');

        if (prevControl) {
            prevControl.addEventListener('click', function () {
                projectsCarousel.goTo('prev');
            });
        }

        if (nextControl) {
            nextControl.addEventListener('click', function () {
                projectsCarousel.goTo('next');
            });
        }
    }

    if (document.getElementsByClassName('tiny-six-item').length > 0) {
        tns({
            container: '.tiny-six-item',
            items: 1,
            controls: false,
            mouseDrag: true,
            loop: true,
            rewind: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 3000,
            nav: true,
            navPosition: 'bottom',
            rtl: isRTL,
            speed: 400,
            gutter: 12,
            responsive: {
                992: {
                    items: 6
                },
                767: {
                    items: 3
                },
                320: {
                    items: 1
                }
            }
        });
    }
})();
