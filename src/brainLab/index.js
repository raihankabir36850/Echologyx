console.log("working slowly man");
var basicStructure = {
  init: function () {
    this.mainJS();
  },
  mainJS: function () {
    //For JS
    var sampleShopNavigationArray = [
      {
        name: "makeUp",
        baseNode: "#header-navigation-desktop",
        version: "Desktop",
        selector:
          "#header-navigation-desktop #site-navigation .site-navigation-megamenu.make-up",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0327/1498/1421/files/Sample_Lipstick.png?v=1632476001",
        header: "Mix &amp; Match",
        description: "Not sure what to buy?<br> Start your Avon journey with",
        title: "3 for £1 Samples",
        bttonText: "Shop Samples",
      },
      {
        name: "skinCare",
        baseNode: "#header-navigation-desktop",
        version: "Desktop",
        selector:
          "#header-navigation-desktop #site-navigation .site-navigation-megamenu.skincare",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0327/1498/1421/files/Sample_Skincare.png?v=1632476002",
        header: "Mix &amp; Match",
        description: "Not sure what to buy?<br> Start your Avon journey with",
        title: "3 for £1 Samples",
        bttonText: "Shop Samples",
      },
      {
        name: "fragnance",
        baseNode: "#header-navigation-desktop",
        version: "Desktop",
        selector:
          "#header-navigation-desktop #site-navigation .site-navigation-megamenu.fragrance",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0327/1498/1421/files/Sample_Fragrance.png?v=1632476002",
        header: "Mix &amp; Match",
        description: "Not sure what to buy?<br> Start your Avon journey with",
        title: "3 for £1 Samples",
        bttonText: "Shop Samples",
      },
      {
        name: "makeUp",
        baseNode: "#header-navigation-mobile",
        version: "Mobile",
        selector:
          "#header-navigation-mobile #site-navigation .site-navigation-megamenu.make-up ul.third-level",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0327/1498/1421/files/Sample_Lipstick.png?v=1632476001",
        header: "Mix &amp; Match",
        description: "Not sure what to buy?<br> Start your Avon journey with",
        title: "3 for £1 Samples",
        bttonText: "Shop Samples",
      },
      {
        name: "skinCare",
        baseNode: "#header-navigation-mobile",
        version: "Mobile",
        selector:
          "#header-navigation-mobile #site-navigation .site-navigation-megamenu.skincare ul.third-level",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0327/1498/1421/files/Sample_Skincare.png?v=1632476002",
        header: "Mix &amp; Match",
        description: "Not sure what to buy?<br> Start your Avon journey with",
        title: "3 for £1 Samples",
        bttonText: "Shop Samples",
      },
      {
        name: "fragnance",
        baseNode: "#header-navigation-mobile",
        version: "Mobile",
        selector:
          "#header-navigation-mobile #site-navigation .site-navigation-megamenu.fragrance ul.third-level",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0327/1498/1421/files/Sample_Fragrance.png?v=1632476002",
        header: "Mix &amp; Match",
        description: "Not sure what to buy?<br> Start your Avon journey with",
        title: "3 for £1 Samples",
        bttonText: "Shop Samples",
      },
    ];
    console.log(
      "🚀 ~ file: index.js ~ line 88 ~ sampleShopNavigationArray",
      sampleShopNavigationArray
    );
    console.log(
      "🚀 ~ file: index.js ~ line 88 ~ sampleShopNavigationArray",
      sampleShopNavigationArray
    );
    console.log(
      "🚀 ~ file: index.js ~ line 88 ~ sampleShopNavigationArray",
      sampleShopNavigationArray
    );
    console.log(
      "🚀 ~ file: index.js ~ line 88 ~ sampleShopNavigationArray",
      sampleShopNavigationArray
    );
    console.log(
      "🚀 ~ file: index.js ~ line 88 ~ sampleShopNavigationArray",
      sampleShopNavigationArray
    );
    console.log(
      "🚀 ~ file: index.js ~ line 88 ~ sampleShopNavigationArray",
      sampleShopNavigationArray
    );
    console.log(
      "🚀 ~ file: index.js ~ line 88 ~ sampleShopNavigationArray",
      sampleShopNavigationArray
    );

    sampleShopNavigationArray.filter(
      ({
        name,
        selector,
        imageUrl,
        header,
        description,
        title,
        bttonText,
        baseNode,
        version,
      }) => {
        if (document.querySelector(baseNode).children.length === 1) {
          var sampleShopNagigation = document.createElement("div");
          sampleShopNagigation.classList.add("sampleShopNagigation");
          sampleShopNagigation.innerHTML =
            '<img src="' +
            imageUrl +
            '" class="imgStyle' +
            version +
            "" +
            " " +
            "" +
            name +
            '">' +
            `<h3 class='shopNavigationHeader'>${header}</h3>` +
            `<p class='shopNavigationDescrip'>${description}</p>` +
            `<p class='shopNavigationTitle'>${title}</p>` +
            `<button class='shopNavigationButton'>${bttonText}</button>`;

          document.querySelector(selector) &&
            document.querySelector(selector).appendChild(sampleShopNagigation);
        }
      }
    );

    var shopSamplesArrray = [
      {
        baseNode: "#header-navigation-desktop",
        selector:
          "#header-navigation-desktop div.site-navigation-megamenu.make-up ul.third-level",
        title: "Shop Samples",
        description: "Mix & Match 3 for £1 Samples",
      },
      {
        baseNode: "#header-navigation-desktop",
        selector:
          "#header-navigation-desktop div.site-navigation-megamenu.skincare ul.third-level",
        title: "Shop Samples",
        description: "Mix & Match 3 for £1 Samples",
      },
      {
        baseNode: "#header-navigation-desktop",
        selector:
          "#header-navigation-desktop div.site-navigation-megamenu.fragrance ul.third-level",
        title: "Shop Samples",
        description: "Mix & Match 3 for £1 Samples",
      },
    ];
    shopSamplesArrray.filter(({ selector, title, description, baseNode }) => {
      if (document.querySelector(baseNode).children.length === 1) {
        var samples = document.createElement("div");
        samples.classList.add("samples");
        samples.innerHTML =
          `<h3 class='samplesTitle'>${title}</h3>` +
          `<p class='samplesDescription'>${description}</p>`;
        document.querySelector(selector).appendChild(samples);
      }
    });
  },
};
console.log("🚀 ~ file: index.js ~ line 160 ~ basicStructure", basicStructure);
console.log("🚀 ~ file: index.js ~ line 160 ~ basicStructure", basicStructure);
console.log(
  "🚀 ~ file: index.js ~ line 160 ~ basicStructure",
  basicStructure
)(function pollFor() {
  if (
    document.querySelector("#header-navigation-mobile") ||
    document.querySelector("#header-navigation-desktop")
  ) {
    basicStructure.init();
    console.log("Variation- A: 01");
  } else {
    setTimeout(pollFor, 25);
  }
})();

export default basicStructure;
