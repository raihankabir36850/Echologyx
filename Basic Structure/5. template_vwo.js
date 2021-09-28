// vwo_$("body").vwoCss({"visibility":"visible !important"});
// window.VWO = window.VWO || [];
// window.VWO.push(['applyChanges', ['VWO_CURRENT_CAMPAIGN'], true]);

var template = {
  init: function() {
    this.mainCss();
    this.mainJs();
  },
  mainCss: function() {
    var styles = document.createElement("style");
    styles.setAttribute("type", "text/css");
    document.head.appendChild(styles).textContent =
      "" +
      "";
  }, 
  pollForJquery: function(callback) {
    var count = 0;
    (function jqueryPoll() {
        if (window.jQuery) {
            callback(window.jQuery);
        } else if (count < 400) {
            count++;
            setTimeout(jqueryPoll, 25);
        }
    })();
  },
  mainJs: function() {
    var $ = window.vwo_$;    
  }
};

(function pollForTemplate() {
  if (window.vwo_$) {
    try {
      template.init();
      console.log("BSP00X BP (D) V2 10/06/21 v-2.0.0");
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollForTemplate, 25);
  }
})();