$(document).ready(function(){


		var clicked = false;
	$('#nav-icon1').click(function(){
		var $this =  $(this);

		
		if(!clicked){
			clicked = true;
			$(".logos").toggleClass("animate-logos");		
			$(".main-slider").toggleClass("go-back");
			
			$this.toggleClass('open');
			$this.next().toggleClass("animated");
			$(".outer").css("left","-500px");
			setTimeout(function(){ 
				anim();
				
			}, 500);
			$(".heading-rotate").toggle();
			$(".par").toggle();
			setTimeout(function(){ 

				clicked = false;
			}, 900);
			
		
		}

		
		
		
	
		
	});
	

		
})

function anim(){


	$(".outer").css("left","-500px").animate({"left":"100px"},200)

}