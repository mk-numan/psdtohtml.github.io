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

    $('.map')
        .gmap3({
            center: [41.850033, -87.650052],
            zoom: 12,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
        })
        .styledmaptype(
            "shadeOfGrey", [
                { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#c8c8c8" }, { "lightness": 40 }] },
                { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] },
                { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
                { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] },
                { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] },
                { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }, { "lightness": 20 }] },
                { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] },
                { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] },
                { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] },
                { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] },
                { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] },
                { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] },
                { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }
            ], { name: "Shades of Grey" }
        );

    jQuery(window).load(function() {


    });


}(jQuery));