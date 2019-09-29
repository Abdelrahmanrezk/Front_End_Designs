var myTitle = document.getElementById('title'),
    myContent = document.getElementById('content'),
    myLiveTitle = document.getElementById('live-title'),
    myLiveContent = document.getElementById('live-content');
myTitle.onkeyup = function () {
    'use strict';
    myLiveTitle.textContent = myTitle.value;
};
myContent.onkeyup = function () {
    'use strict';
    myLiveContent.textContent = myContent.value;
};

