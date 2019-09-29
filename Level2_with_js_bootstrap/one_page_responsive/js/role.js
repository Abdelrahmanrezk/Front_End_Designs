/* global $, jQuery, alert */

$(document).ready(function (){
    "use strict";
    
    //niceScroll
        $('html').niceScroll({
        
        cursorcolor:'#283e4a',
        cursorwidth:'12px',
        cursorborder:'2px solid #1abc9c',
         scrollspeed: 80
 
    });

     cursorwidth:'12px',
    $('.carousel').carousel({
        interval:6000
    });
    // Show Color option when click on gear
    $(".gearCheck").click(function (){
        $(".color-option").fadeToggle()
    })
    //change theme color on click
    var colorLi =$(".color-option ul li");
     colorLi
    .eq(0).css("backgroundColor","#e9564a").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#afab59")
     colorLi.click(function(){ 
         $("link[href*='color']").attr("href",$(this).attr("data-value"));
     })
     // changing scroll to top
     var scrollingBottom = $('#scroll-top');
        $(window).scroll(function (){
            // short cut of if condition
            $(this).scrollTop() >=1000? scrollingBottom.show(): scrollingBottom.hide();  
        })
           scrollingBottom.click(function(){
                $('html,body').animate({scrollTop:0},2000)
            })
        })
//Loading screen
$(window).on('load',function (){
     "use strict";
    $('.loading-screen .sk-cube-grid').fadeOut(2000,function (){
        $('body').css('overflow','auto');
        $(this).parent().fadeOut(2000)
        
    })
   
})
