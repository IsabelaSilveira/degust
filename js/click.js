$(document).ready(function(){
    $('.menu-anchor').on('click touchstart', function(e){
        $('.bloco-menu_mobile').toggleClass('menu-active');
        e.preventDefault();
    });
})