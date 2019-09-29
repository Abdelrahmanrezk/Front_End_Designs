/*global $, alert,console*/
$(function(){
    
    'use strict';
    //Adjust header height
    var myHeight=$('.header');
    var mySlider = $('.bxslider');
   myHeight.height($(window).height());
    $(window).on("resize",function(){
        
        myHeight.height($(window).height());
        
       mySlider.each(function(){
        
        $(this).css('paddingTop', ($(window).height()-$('.bxslider li').height())/2)
        
    }); 
        
   
    })
    //list add clas active
    $(".list li a").on("click",function(){
        
        $(this).parent().addClass("active").siblings().removeClass("active")
    });
    // adjust list item li center of header
    mySlider.each(function(){
        
        $(this).css('paddingTop', ($(window).height()-$('.bxslider li').height())/2)
        
    })
    //Trigger Bx Slider
     mySlider.bxSlider({
         
         pager :false
     });
    
    //Smoth Scrolling To div
    $('.list li a').on('click',function(){
        
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top 
        },1000)
    });
    //our auto slider code
    (function autoSlider(){
        $('.slider .active').each(function(){
            if(!$(this).is(':last-child')){
                
                $(this).delay(3000).fadeOut(1000,function(){
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                      autoSlider();
                });
            }
            else {
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                   autoSlider();
                })
            }
                                  
            
          
        })
        
    }());
    //Trigger MixItUp
    $('#container').mixItUp();
    //Adjust shuffle Links
    $('.shuffle-in li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        
    })
    
    //Trigger Nice Scroll
    $('html').niceScroll({
        
        cursorcolor:'#1abc9c',
        cursorwidth:'10px',
        cursorborder:'2px solid #1abc9c',
 
    });

})