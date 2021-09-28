function waitForElem(waitFor, callback, minElements=1, variable=false) {
  function checkElements() {
    if (variable) {
      return waitFor;
    }
    else {
      return window.document.querySelectorAll(waitFor);
    }
  }

  var thisElem = checkElements(),
    timeOut;
  if ((!variable && thisElem.length >= minElements) || (variable && typeof (thisElem) !== "undefined")) {
    return callback(thisElem);
  }
  else {
    var interval = setInterval(function () {
      thisElem = checkElements();
      if ((!variable && thisElem.length >= minElements) || (variable && typeof (thisElem) !== "undefined")) {
        clearInterval(interval);
        clearTimeout(timeOut);
        return callback(thisElem);
      }
    }, 20);
    timeOut = setTimeout(function () {
      // Fallback
      clearInterval(interval);
      return callback(false);
    }, 10000);
  }
}