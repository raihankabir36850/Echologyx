$.ajax({
    method: "POST",
    url: "https://www.tsb.co.uk/sites/Satellite?pagename=public/seBorrowPanelDetail",
    data: {years: 7, months: 0, amount: 10000}
}).done(function (msg) {
    alert("Data Saved: " + msg);
});


$(document).ajaxComplete(function( event, request, settings ) {
    if(settings.url.indexOf("https://www.whitestuff.com/action/ViewProduct-RenderProductComponents") > -1 && request.status === 200) {
        console.log();
    }
});

var targetM = document.querySelector('.ba-greet');
if(targetM){
	var MutationObserverM = window.MutationObserver || window.WebKitMutationObserver;
	var observerM = new MutationObserverM(function (mutationsM) {
		mutationsM.forEach(function () {
			$(".ba-not-logged-in").html('Login User');                    
		});
	});
	var configM = {childList: true, subtree: true, characterData: true};
	observerM.observe(targetM, configM);
}


var checkoutSecurelyCTA = document.querySelectorAll("#checkoutSecurely button");						
if(checkoutSecurelyCTA.length > 0){
	for (var q = 0; q < checkoutSecurelyCTA.length; q++) {
		checkoutSecurelyCTA[q].addEventListener("click", function() {					
			adobe.target.trackEvent({
				mbox: "checkoutSecurelyCTA"
			});			
			
		}, false);
	}
}

var checkoutSecurelyCTA = document.querySelector("#checkoutSecurely button");						
if(checkoutSecurelyCTA){	
	checkoutSecurelyCTA.addEventListener("click", function() {					
		adobe.target.trackEvent({
			mbox: "checkoutSecurelyCTA"
		});			
		
	}, false);	
}

$(document).on("click", ".current-code", function () {
     $('.remove-discount-button').trigger("click");
});
 
$(".categories li.item.ng-scope > a > span").bind("click", function (e) {
	  e.stopPropagation();
});
 
$("#changeLocationModal").click(function(event) {
	  $(".categories li.item.ng-scope > a > span").click();
});


var on = function(type, selector, cb) { 
  window.addEventListener(type, function(event) {
	// if(event.isTrusted) {
	  var target = event.target.closest(selector);

	  if (target === null) {
		return;
	  }
	  var callback = cb.bind(event.target);
	  callback(event);
	// }
  });
};
	
   
on('click', '.page-checkout #card-create .form__back .js-card-action', function() {​​​​​
     console.log('inside Continue signIn function');
}​​​​​);

var waitForElement = function(elem) {
    if (typeof  elem  ==  'string') {
        return  new Promise(function (resolve) {
            var  wfelem  =  function () {
                if (null  !=  document.querySelector(elem)) {
                    resolve(document.querySelector(elem));
                } else {
                    window.requestAnimationFrame(wfelem);
                }
            };
            wfelem();
        });
    }
};

waitForElement('button#addToCart').then(function(button) {
     button.textContent = 'Buy Now';
});

waitUntil = function(callback) {
    if (typeof callback === 'function') {
        return new Promise(function(resolve, reject) {
        var tick = setInterval(function() {
            if (callback() === true) {
                clearInterval(tick);
                return resolve();
            }
        });
    });
    } else {
        console.error(callback + ' should be a function');
    }
};
window.waitUntil(function () {
    return "complete" == document.readyState;
}).then(function () {
    console.log("Page loading complete!");
});


function iOSDevice() {
 return (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) 
}

window.onclick = function(event) {
	var msClasslist = event.target.classList;
	console.log("msClasslist", msClasslist);
	if(msClasslist.contains('icon--close')) {

	}
}