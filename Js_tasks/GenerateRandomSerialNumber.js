function generateSerial() {
    
    'use strict';
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        serialLength = 5,
        randomSerial = '',
        rannum,
        i;
    
    for(i = 0; i< serialLength; i = i + 1){
         rannum = Math.floor(Math.random() * chars.length);
        randomSerial += chars.substring(rannum , rannum +1);
       
    }
    document.getElementById('serial').innerHTML =randomSerial;

}