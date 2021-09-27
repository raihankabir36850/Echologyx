var basicStructure = {
  init: function () {
    this.mainCss();
    this.mainJS();
    this.goals();
  },
  mainCss: function () {
    var s = document.createElement("style");
    s.setAttribute("type", "text/css");
    document.head.appendChild(s).textContent =
      "" + "body {\n" + "    border: 70px solid #000;\n" + "}";
  },
  mainJS: function () {
    //For JS
    console.log("Main js is Running....");
  },
  goals: function () {
    // For Goal/Metric JS
  },
};

(function pollForLoadVariation() {
  if (document.readyState === "complete") {
    basicStructure.init();
    console.log("Variation- A: 01");
  } else {
    setTimeout(pollForLoadVariation, 25);
  }
})();

/***********************donot copy to after this line******************************/

export default basicStructure;
