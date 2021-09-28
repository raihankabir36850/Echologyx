(function pollFor() {
    if (document.getElementById('menu') && window.jQuery !== undefined) {
        basicStructure.init();
        console.log("Variation- A: 01");
    } else {
        setTimeout(pollFor, 25);
    }
})();

//Poll off:  10000ms
var pollCounter = 0;
(function pollFor() {
    if (document.getElementById('menu') && window.jQuery !== undefined) {
        basicStructure.init();
        console.log("Variation- A: 01");
    } else {
        if(pollCounter < 400){
            console.log('pollCounter',pollCounter);
            setTimeout(pollFor, 25);
        }
        pollCounter++;
    }
})();