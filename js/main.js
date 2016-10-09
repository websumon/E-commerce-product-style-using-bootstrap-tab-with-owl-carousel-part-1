(function ($) {
 "use strict";

 $('.tab-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
 
})(jQuery); 