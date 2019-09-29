
function showTime() {
    'use strict';
    var timeNow = new Date(),
        hours = timeNow.getHours(),
        minutes = timeNow.getMinutes(),
        seconds = timeNow.getSeconds(),
        myTime = document.getElementById('clock');
  
    if (hours < 10) {
        
        hours = '0' + hours;
    }
    if (minutes < 10) {
        
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        
        seconds = '0' + seconds;
    }
    myTime.textContent = hours + ":" + minutes + ":" + seconds;
}

window.onload = function () {
    'use strict';
    setInterval(showTime, 100);
 
};


