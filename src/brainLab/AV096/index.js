var basicStructureOfAV096 = {
  primary: function () {
    // fetch a api call
    const fetchCartJSON = async function () {
      const response = await fetch("/cart.json");
      const carts = await response.json();
      return carts;
    };
    fetchCartJSON().then((carts) => {
      // fetched carts information
      let CartsArray = carts.items;
      let isSampleProduct = (product) =>
        product.title.includes("Sample") === true;
      if (CartsArray.some(isSampleProduct)) {
        this.mainJS();
      } else {
        console.log("variation is not working");
      }
    });
  },
  mainJS: function () {
    //For JS
    //console.log("variation is loading");
    document
      .querySelector("div.fieldset-description")
      .classList.add("fieldset-description-style");

    var fieldsetHeader = document.createElement("h2");
    fieldsetHeader.classList.add("fieldsetHeader");
    fieldsetHeader.textContent = "Get more out of your samples!";

    document
      .querySelector("div.fieldset-description div.section__content")
      .parentNode.insertBefore(
        fieldsetHeader,
        document.querySelector("div.fieldset-description div.section__content")
      );

    document.querySelector(
      "div.checkbox-wrapper label.checkbox__label"
    ).innerHTML =
      "Tick here to keep up to date on news and offers,<br>including promotions related to your samples";
    function reportWindowSize() {
      console.log(window.innerHeight);
      //widthOutput.textContent = window.innerWidth;
    }
    window.onresize = reportWindowSize;
  },
};

(function pollForbasicStructureOfAV096() {
  if (document.querySelector("body#checkout-template")) {
    basicStructureOfAV096.primary();
    console.log("Variation- A: 01");
  } else {
    setTimeout(pollForbasicStructureOfAV096, 25);
  }
})();

export default basicStructureOfAV096;
