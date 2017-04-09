jQuery(document).ready(function($){     
    
    var larg = $('.painel').width();
    
    var obj1 = $('#element1').position();
    var obj2 = $('#element2').position();
    var obj3 = $('#element3').position();
    var obj4 = $('#element4').position();
    
    var obj5 = $('#element5').position();
    var obj6 = $('#element6').position();
    var obj7 = $('#element7').position();
    var obj8 = $('#element8').position();
 
    $('.painel').mousemove(function(){
        
        var mPosX = event.pageX;
        var mPosY = event.pageY;
        console.log("Posicao X: ",mPosX);
        console.log("Posicao Y: ",mPosY);
        
        if(mPosX <= larg/2){
            console.log("menor que a metade");  
            $('#element1').css({'top':obj1.top - 30});
            $('#element2').css({'left':obj2.left + 30});
            $('#element3').css({'left':obj3.left - 35, 'top':obj3.top + 25});
            $('#element4').css({'left':obj4.left - 35});
            
            $('#element5').css({'top':obj5.top + 10});
            $('#element6').css({'left':obj6.left - 30});
            $('#element7').css({'left':obj7.left + 20, 'top':obj7.top - 25});
            $('#element8').css({'left':obj8.left + 35});   
        }else{
            console.log("maior que a metade"); 
            $('#element1').css({'top':obj1.top + 15});
            $('#element2').css({'left':obj2.left - 30});
            $('#element3').css({'left':obj3.left + 35, 'top':obj3.top - 25});
            $('#element4').css({'left':obj4.left + 35});
            
            $('#element5').css({'top':obj5.top - 30});
            $('#element6').css({'left':obj6.left + 30});
            $('#element7').css({'left':obj7.left - 20, 'top':obj7.top + 25});
            $('#element8').css({'left':obj8.left - 35});
        }
        
    });

    
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
    
    $('#col-infos').addClass('animated slideInUp');
});

var posElement = $('#col-infos').offset().top - 150;
var altElement = $('#col-infos').height();
var totalElement = posElement+altElement;

var posSobre = $('.sobre').offset().top;
var altSobre = $('.sobre').height();
var totalSobre = posSobre+altSobre;

var winScroll;
jQuery(window).scroll(function(){
    
    winScroll = $(window).scrollTop();
    
    if( winScroll >= posElement && winScroll <= totalElement){
        $('.camadas').addClass('in-view');
    }else{
        $('.camadas').removeClass('in-view');
    }
    
    if( winScroll >= posSobre && winScroll <= totalSobre){
        $('.img-sobre').addClass('animated fadeIn');
    }

})