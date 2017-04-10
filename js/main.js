function goToByScroll(id){ 
    jQuery(document).ready(function($){
        $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow'); 
       return false; 
    });
};
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
        
        if(mPosX <= larg/2){
            $('#element1').css({'top':obj1.top - 30});
            $('#element2').css({'left':obj2.left + 30});
            $('#element3').css({'left':obj3.left - 35, 'top':obj3.top + 25});
            $('#element4').css({'left':obj4.left - 35});
            
            $('#element5').css({'top':obj5.top + 10});
            $('#element6').css({'left':obj6.left - 30});
            $('#element7').css({'left':obj7.left + 20, 'top':obj7.top - 25});
            $('#element8').css({'left':obj8.left + 35});   
        }else{
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
    
    //movimento dos itens
    var wLarg = $('.lanches').width();
    
    var itens1 = $('#itens1').position();
    var itens2 = $('#itens2').position();
    var itens3 = $('#itens3').position();
    var itens4 = $('#itens4').position();
 
    $('.lanches').mousemove(function(){
        
        var mPosX = event.pageX;
        var mPosY = event.pageY;
        
        if(mPosX <= wLarg/2){
            $('#itens1').css({'top':itens1.top - 15});
            $('#itens2').css({'left':itens2.left + 20});
            $('#itens3').css({'top':itens3.top + 0});
            $('#itens4').css({'top':itens4.top + 5});   
        }else{
            $('#itens1').css({'top':itens1.top + 15});
            $('#itens2').css({'left':itens2.left - 20});
            $('#itens3').css({'top':itens3.top + 25});
            $('#itens4').css({'top':itens4.top - 5});
        }
        
    });
    
    //movimento dos itens
    var pLarg = $('.petiscos').width();
    
    var itens1 = $('#figure1').position();
    var itens2 = $('#figure2').position();
 
    $('.petiscos').mousemove(function(){
        
        var mPosX = event.pageX;
        var mPosY = event.pageY;
        
        if(mPosX <= pLarg/2){
            $('#figure1').css({'top':itens1.top - 15});
            $('#figure2').css({'left':itens2.left + 20}); 
        }else{
            $('#figure1').css({'top':itens1.top + 15});
            $('#figure2').css({'left':itens2.left - 20});
        }
        
    });
});

var posElement = $('#col-infos').offset().top - 250;
var altElement = $('#col-infos').height() + 250;
var totalElement = posElement+altElement;

var posSobre = $('.sobre').offset().top;
var altSobre = $('.sobre').height();
var totalSobre = posSobre+altSobre;

var posAdd = $('.adicional').offset().top - 150;
var altAdd = $('.adicional').height();
var totalAdd = posAdd+altAdd;

console.log(posAdd);

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
    
    if( winScroll >= posAdd && winScroll <= totalAdd){
        $('#bandeja').addClass('animated slideInUp').show();
    }else if(winScroll < posAdd){
        $('#bandeja').hide();        
    }

});

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}