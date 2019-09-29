/* global $,jQuery,alert*/
$(document).ready(function () {
    
    'use strict';
    
    // Nice Scroll
    
    $("html").niceScroll();
    
    
    $('.carousel').carousel({
        interval: 5000
    });
    
    // show color options
    
    $('.gear-check').click(function () {
        
        $('.color-options').fadeToggle(2000);
    });
    
    // Change Color Theme for every selector
    var colorLi = $('.color-options ul li');
    
    colorLi
        .eq(0).css('backgroundColor', '#c14444').end()
        .eq(1).css('backgroundColor', '#866c44').end()
        .eq(2).css('backgroundColor', '#60659c').end()
        .eq(3).css('backgroundColor', '#25422f');
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
      //console.log($(this).attr("data-value")) 
    });

    //Scroll to Top
    var scrollToTop = $('#scroll-top');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            scrollToTop.show();
        } else {
            scrollToTop.hide();
        }
           
    });
    scrollToTop.click(function () {
        $("html,body").animate({scrollTop: 0}, 700);
    });

});
        // loading screen
$(window).on('load', function () {
    'use strict';
    $(".overlay-loading h1").fadeOut(2000, function () {
            // Scrolling for body
           
        $('.overlay-loading .face').fadeOut(2000, function () {
            $('body').css('overflow', 'auto');
            $(this).parent().fadeOut(2000, function () {
                 
                $(this).remove();
            });
        });
           
    });
       
});