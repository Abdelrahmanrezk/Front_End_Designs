var myText = "Hello from Js",
    i = 0,
    loadding;
 

function typeWriter() {
    'use strict';
        
    var textRewriter = setInterval(function () {
          
     
        document.getElementById('text').textContent += myText[i];
        i += 1;
        if (i >  myText.length - 1) {
        
            clearInterval(textRewriter);
        }
    }, 100);
   
        
}
typeWriter()



    
  

 
    