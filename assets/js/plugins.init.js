/* SARMD Custom Init: Tiny Slider */
(function () {
    var isRTL = document.documentElement.dir === 'rtl';

    if (document.getElementsByClassName('tiny-three-item').length > 0) {
        tns({
            container: '.tiny-three-item',
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
