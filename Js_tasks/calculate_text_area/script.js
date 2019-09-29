
var myText = document.getElementById('text'),
    mySpan = document.getElementById('span');

myText.onkeyup = function(){
    
    mySpan.textContent =  0 + this.value.length;
    
    if(mySpan.textContent < 0){
        mySpan.style.color = '#f00';
    }else{
         mySpan.style.color = '#000';
    }
}