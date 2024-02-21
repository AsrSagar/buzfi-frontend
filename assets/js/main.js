(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       $(".homepage-slides").owlCarousel({
		   items: 1,
		   nav: false,
		   dots: true,
		   loop: true,
		   autoplay: true
	   });
        
        
       $(".flash-products").owlCarousel({
		   items: 4,
		   nav: false,
		   dots: true,
		   loop: true,
		   autoplay: true,
           responsive: {
                0:{
                  items: 2
                },
                480:{
                  items: 2
                },
                769:{
                  items: 4
                }
            }
	   });
        
       $(".all-top-icon-category").owlCarousel({
		   items: 7,
		   nav: false,
		   dots: true,
		   loop: true,
		   autoplay: true,
           responsive: {
                0:{
                  items: 2
                },
                480:{
                  items: 6
                },
                769:{
                  items:7
                }
            }
	   });
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	