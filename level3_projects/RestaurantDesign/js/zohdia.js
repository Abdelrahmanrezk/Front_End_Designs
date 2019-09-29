$(document).ready(function () {
    /*Start header and section one */
    // Header resize and height
   
  // nav button click
    var clickd =false;
    var $header =$('header');
    
    $header.find('nav .nav-btn').click(function () {
        var $this =  $(this)
        if(!clickd){
            clickd = true;
     $this.parent().toggleClass('active');
            setTimeout(function() {
                clickd = false
            },1400)
            
        }
        
        
    })
    $mainSection = $('.main-section');
    $(window).scroll(function () {
        if($(window).scrollTop() >= $mainSection.height() -100){
            $header.addClass('sticly');
        }else{
            $header.removeClass('sticly')
        }
    })
    
    // لما ادوس بره الناف يقفله لو مفتوح
  
        $(document).on('click',function(e){
            var clickover = $(e.target);
            
            if(!clickover.closest('header').length && $('nav').hasClass('active')){
                $('nav').removeClass('active');
            }
        })
    /*Slider function */
  
   
   function menuSlider (){
       var $sliderContainer = $('.menu-slider'),
           $slider =$sliderContainer.find('.slider'),
           $sliderBanner = $sliderContainer.find('.slider-banner'),
           sliderItems = $sliderBanner.find('.slider-item'),
            itemsLength = sliderItems.length,
           $nextButton = $sliderContainer.find('.next'),
           $preButton = $sliderContainer.find('.preivous'),
           itemWidth,
           slidesToShow =3;
        var activeSlides = slidesToShow;
                 function responsiveSlides(){
                      activeSlides -= slidesToShow;
               if($(window).width() <= 991 && $(window).width() >= 550){
                 slidesToShow = 2;
                 
             }else if($(window).width() <= 550){
                slidesToShow = 1; 
             }else {
                 slidesToShow =3;
             }
                      activeSlides += slidesToShow;
       } responsiveSlides()
          
           var itemsWidth,
           left=0,
           itemMove=0,
            cliced = false;
       sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
            function fixedWidth(){
              itemWidth=$('.menu-slider .slider-item').outerWidth();
                itemsWidth = itemWidth * itemsLength;
                 $sliderBanner.width(itemsWidth);
       }fixedWidth()
    
        
       
 function leftCal(){
           return itemWidth *itemMove;
       }
 
        $(window).resize(function(){
          responsiveSlides();
                sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
          
       
                 fixedWidth();
             $sliderBanner.css('left', -leftCal());
              
            });
           
       
  
         
              function chechStatus(){
           
           if(activeSlides == itemsLength){
               $nextButton.addClass('disabled');
           }else{
               $nextButton.removeClass('disabled');
           }
              if(activeSlides == slidesToShow){
               $preButton.addClass('disabled');
           }else{
               $preButton.removeClass('disabled');
           }
       } chechStatus()
      
     
       
       $nextButton.click(function() {
           if(!cliced){
           if(activeSlides != itemsLength){
                cliced =true;
               itemMove++;
               left =-leftCal();
           $sliderBanner.css('left', left);
               activeSlides++;
               setTimeout(function(){
                   
                   cliced = false;
               },400)
                chechStatus();
               }
           }
       })
       
           $preButton.click(function() {
               if(!cliced){
           if(activeSlides > slidesToShow){
                cliced = true;
               itemMove--;
               left =-leftCal() ;
           $sliderBanner.css('left', left);
               activeSlides--;
               setTimeout(function (){
                   cliced =false;
               },400)
                chechStatus();
               }
               }
       })
       
        
           
       
   }
menuSlider();
  
    
     /*Cheif Slider function */
  
   
   function chiefSlider (){
       var $sliderContainer = $('.chief-slider'),
           $slider =$sliderContainer.find('.slider'),
           $sliderBanner = $sliderContainer.find('.slider-banner'),
           sliderItems = $sliderBanner.find('.slider-item'),
            itemsLength = sliderItems.length,
           $nextButton = $sliderContainer.find('.next'),
           $preButton = $sliderContainer.find('.preivous'),
           itemWidth,
           slidesToShow =1;
        var activeSlides = slidesToShow;

           var itemsWidth,
           left=0,
           itemMove=0,
            cliced = false;
       sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
            function fixedWidth(){
              itemWidth=$('.chief-slider .slider-item').outerWidth();
                itemsWidth = itemWidth * itemsLength;
                 $sliderBanner.width(itemsWidth);
       }fixedWidth()
    
        
       
 function leftCal(){
           return itemWidth *itemMove;
       }
 
        $(window).resize(function(){
        
                sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
          
       
                 fixedWidth();
             $sliderBanner.css('left', -leftCal());
              
            });
           
       
  
         
              function chechStatus(){
           
           if(activeSlides == itemsLength){
               $nextButton.addClass('disabled');
           }else{
               $nextButton.removeClass('disabled');
           }
              if(activeSlides == slidesToShow){
               $preButton.addClass('disabled');
           }else{
               $preButton.removeClass('disabled');
           }
       } chechStatus()
      
     
       
       $nextButton.click(function() {
           if(!cliced){
           if(activeSlides != itemsLength){
                cliced =true;
               itemMove++;
               left =-leftCal();
           $sliderBanner.css('left', left);
               activeSlides++;
               setTimeout(function(){
                   
                   cliced = false;
               },400)
                chechStatus();
               }
           }
       })
       
           $preButton.click(function() {
               if(!cliced){
           if(activeSlides > slidesToShow){
                cliced = true;
               itemMove--;
               left =-leftCal() ;
           $sliderBanner.css('left', left);
               activeSlides--;
               setTimeout(function (){
                   cliced =false;
               },400)
                chechStatus();
               }
               }
       })
       
        
           
       
   }
chiefSlider();
    
    
  
    
});