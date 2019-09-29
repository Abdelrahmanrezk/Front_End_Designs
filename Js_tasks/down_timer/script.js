var seconds = 30,
    countDiv = document.getElementById('countdown'),
    secondPass,
    countDown;
countDown=setInterval(function () {
    'use strict';
    
    secondPass();
    
},1000);

function secondPass(){
    'use strict';
    
    var minuts = Math.floor((seconds / 60)),
        reminderSeconds = (seconds % 60);
        countDiv.innerHTML = minuts + ":" + reminderSeconds;
        if(seconds > 0){
            
            seconds-=1;
        }else{
            
            clearInterval(countDiv);
            countDiv.innerHTML = "Done";
        }
   
}