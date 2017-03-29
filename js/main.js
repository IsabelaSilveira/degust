jQuery(document).ready(function($){                      
    $("#prateleira").owlCarousel({
        dots : false,
        nav: true,
        items : 4,
        loop: true,
        lazyLoad: true,
        responsiveClass: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2,
                dots:true,
                slideBy:2
            },
            768 : {
                items:3
            },
            992 : {
                items:4
            }
        }
    });
});