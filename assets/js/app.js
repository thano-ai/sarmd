/* Template Name: Landrick - Saas & Software Landing Page Template
   Author: Shreethemes
   E-mail: support@shreethemes.in
   Created: August 2019
   Version: 4.7.0
   File Description: Main JS file of the template

   
*/


/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Loader               *
 *     02.  Toggle Menus         *
 *     03.  Active Menu          *
 *     04.  Clickable Menu       *
 *     05.  Back to top          *
 *     06.  Feather icon         *
 *     07.  DD Menu              *
 *     08.  Active Sidebar Menu  *
 *     09.  Contact Js           *
 ================================*/


window.addEventListener('load',   fn , false )

//  window.onload = function loader() {
function fn() {
    // Preloader
    if(document.getElementById('preloader')){
        setTimeout(() => {
            document.getElementById('preloader').style.visibility = 'hidden';
            document.getElementById('preloader').style.opacity = '0';
        }, 350);
    }
    // Menus
    activateMenu();
}

//Menu
// Toggle menu
function toggleMenu() {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
    } else {
        isOpen.style.display = "block";
    }
};

//Menu Active
function getClosest(elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;

};

function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

        var matchingMenuItem = null;
        for (var idx = 0; idx < menuItems.length; idx++) {
            if (menuItems[idx].href === window.location.href) {
                matchingMenuItem = menuItems[idx];
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
         
         
            var immediateParent = getClosest(matchingMenuItem, 'li');
      
            if (immediateParent) {
                immediateParent.classList.add('active');
            }
            
            var parent = getClosest(immediateParent, '.child-menu-item');
            if(parent){
                parent.classList.add('active');
            }

            var parent = getClosest(parent || immediateParent , '.parent-menu-item');
        
            if (parent) {
                parent.classList.add('active');

                var parentMenuitem = parent.querySelector('.menu-item');
                if (parentMenuitem) {
                    parentMenuitem.classList.add('active');
                }

                var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            } else {
                var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            }
        }
    }
}

// Clickable Menu
if(document.getElementById("navigation")){
    var elements = document.getElementById("navigation").getElementsByTagName("a");
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
            if(elem.target.getAttribute("href") === "javascript:void(0)") {
                var submenu = elem.target.nextElementSibling.nextElementSibling;
                submenu.classList.toggle('open');
            }
        }
    }
}

// Menu sticky
function windowScroll() {
    const navbar = document.getElementById("topnav");
    if(navbar!=null){
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// back-to-top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//ACtive Sidebar
(function () {
    var current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);;
    if (current === "") return;
    var menuItems = document.querySelectorAll('.sidebar-nav a');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].parentElement.className += " active";
        }
    }
})();

//Feather icon
feather.replace();

// dd-menu
var ddmenu = document.getElementsByClassName("dd-menu");
for(var i = 0, len = ddmenu.length; i < len; i++) {
    ddmenu[i].onclick = function (elem) {
        elem.stopPropagation();
    }
}

//Tooltip
var tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = (typeof bootstrap !== 'undefined') ? tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}) : [];

//Popovers
var popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = (typeof bootstrap !== 'undefined') ? popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
}) : [];

// Gallery Image Zoom Modal
(function () {
    'use strict';

    var glightboxCallbacks = [];
    var glightboxScriptLoaded = false;

    function ensureGlightboxStyles() {
        if (!document.querySelector('link[data-glightbox]')) {
            var linkEl = document.createElement('link');
            linkEl.rel = 'stylesheet';
            linkEl.href = 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css';
            linkEl.setAttribute('data-glightbox', 'true');
            document.head.appendChild(linkEl);
        }
    }

    function loadGlightboxAssets(callback) {
        ensureGlightboxStyles();

        if (typeof GLightbox !== 'undefined') {
            callback();
            return;
        }

        glightboxCallbacks.push(callback);

        if (glightboxScriptLoaded) {
            return;
        }

        glightboxScriptLoaded = true;

        var scriptEl = document.createElement('script');
        scriptEl.src = 'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js';
        scriptEl.async = true;
        scriptEl.defer = true;
        scriptEl.onload = function () {
            var pending = glightboxCallbacks.slice();
            glightboxCallbacks.length = 0;
            pending.forEach(function (cb) { cb(); });
        };
        document.body.appendChild(scriptEl);
    }

    function createLightboxLinks() {
        var galleries = document.querySelectorAll('.tiny-six-item');
        if (!galleries.length) {
            return [];
        }

        var lightboxNodes = [];

        galleries.forEach(function (gallery, galleryIndex) {
            var galleryId = gallery.getAttribute('data-gallery') || ('project-gallery-' + (galleryIndex + 1));
            gallery.setAttribute('data-gallery', galleryId);

            var images = gallery.querySelectorAll('.popular-tour img');
            images.forEach(function (img, imageIndex) {
                var fullSrc = img.getAttribute('data-full') || img.getAttribute('src');
                if (!fullSrc) {
                    return;
                }

                var wrapper = img.closest('a.gallery-lightbox');
                if (!wrapper) {
                    wrapper = document.createElement('a');
                    wrapper.className = 'gallery-lightbox';
                    wrapper.setAttribute('aria-label', 'عرض الصورة بالحجم الكامل');
                    img.parentNode.insertBefore(wrapper, img);
                    wrapper.appendChild(img);
                }

                wrapper.href = fullSrc;
                wrapper.setAttribute('data-gallery', galleryId);
                wrapper.removeAttribute('data-title');
                wrapper.removeAttribute('title');
                wrapper.setAttribute('data-description', '');

                lightboxNodes.push(wrapper);
            });
        });

        return lightboxNodes;
    }

    function initializeGalleryLightbox() {
        var lightboxLinks = createLightboxLinks();
        if (!lightboxLinks.length || typeof GLightbox === 'undefined') {
            return;
        }

        if (window.galleryLightboxInstance && typeof window.galleryLightboxInstance.destroy === 'function') {
            window.galleryLightboxInstance.destroy();
        }

        window.galleryLightboxInstance = GLightbox({
            selector: '.gallery-lightbox',
            touchNavigation: true,
            loop: true,
            openEffect: 'zoom',
            closeEffect: 'fade',
            zoomable: true,
            draggable: true,
            autoplayVideos: false
        });
    }

    function initGalleryLightbox() {
        var galleries = document.querySelectorAll('.tiny-six-item');
        if (!galleries.length) {
            return;
        }

        loadGlightboxAssets(initializeGalleryLightbox);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGalleryLightbox);
    } else {
        initGalleryLightbox();
    }
})();