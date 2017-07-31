(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".homepage-slides").owlCarousel({

            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,
        });




        $(".case-studies-carousel").owlCarousel({

            loop: true,
            margin: 30,
            smartSpeed: 600,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {

                0: {
                    items: 1,
                },

                768: {
                    items: 2,
                },

                992: {
                    items: 3
                }
            }
        });



        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,

        });

        $(".logo-carousel").owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,
            responsive: {

                0: {
                    items: 2,
                },

                768: {
                    items: 4,
                },

                992: {
                    items: 6
                }
            }
        });



        $(".menu-trigger").on('click', function() {
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").addClass("active");
        });

        $(".menu-close, .off-canvas-menu-shade").on('click', function() {
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
        });


        $('.single-testimonial-box').hover(function() {
            $('.single-testimonial-box').removeClass('active');
            $(this).addClass('active');
        });

        $(".video-play-btn").magnificPopup({
            type: 'video'
        });




        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();






    });


    jQuery(window).load(function() {


    });


}(jQuery));