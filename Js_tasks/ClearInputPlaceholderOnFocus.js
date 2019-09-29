/*
document.getElementById('input').onfocus = function(){
  
document.getElementsByName("text")[0].placeholder=""; 
// [0] because this is the first element of this name
    
}
document.getElementById('input').onblur = function(){
    
document.getElementsByName("text")[0].placeholder="Type Your Name Plzz";
    
}


*/

var myInput =document.getElementById('input');

myInput.onfocus = function(){
    
    myInput.placeholder = "";
}
myInput.onblur = function(){
    
    myInput.placeholder.value = "";
     myInput.placeholder = "Type Your Name Plzz";
}
