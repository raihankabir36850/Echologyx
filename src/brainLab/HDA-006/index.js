var basicStructure = {
  init: function () {
    this.mainJS();
  },
  mainJS: function () {
    //For JS
    var desktopNav = [
      {
        name: "Pakete",
      },
      {
        name: "activeSatPackets",
        text: "Bereits ein SAT paket?",
      },
      {
        name: "orderSatHardware",
      },
      {
        name: "ActivateTvApp",
        text: "Mehr über TV-App",
      },
      {
        name: "learnAboutHardware",
        text: "Mehr über SAT-Hardware",
      },
    ];

    desktopNav.forEach((element, desktopIndex) => {
      document
        .querySelectorAll("#main-navigation .list-inline.list-first li")
        .forEach((liElem, index) => {
          if (desktopIndex === index) {
            liElem.classList.add(element.name);
            element.text
              ? (liElem.querySelector("a").innerText = element.text)
              : null;
          }
        });
    });

    var mobileNav = [
      {
        name: "packages",
      },
      {
        name: "mbActiveSatPackets",
        text: "Bereits ein SAT paket?",
      },
      {
        name: "mbOrderSatHardware",
      },
      {
        name: "ActivateTvApp",
        text: "Mehr über TV-App",
      },
      {
        name: "mbLearnAboutHardware",
        text: "Erfahren Sie über Hardware",
      },
      {
        name: "streamingPlayer",
      },
      {
        name: "myHdAustria",
      },
      {
        name: "dealers",
        text: "Händler-Login",
      },
      {
        name: "blog",
      },
      {
        name: "customerService",
      },
    ];

    mobileNav.forEach((mobileNav, mobileNavIndex) => {
      document
        .querySelectorAll(
          "#mobile-navigation .list-inline.list-first.mm-listview li"
        )
        .forEach((listItem, listIndex) => {
          if (mobileNavIndex === listIndex) {
            listItem.classList.add(mobileNav.name);
            mobileNav.text
              ? (listItem.querySelector("a").innerText = mobileNav.text)
              : null;
          }
        });
    });

    var satReceiver = document
      .querySelector(".ilst-inline-item.meta-item.myHdAustria")
      .cloneNode(true);
    satReceiver.classList.remove("myHdAustria");
    satReceiver.classList.add("satReceiver");
    satReceiver.innerHTML =
      "<a href='/hardware/aktivieren/'>Du hast schon ein SAT-Empfangsgerät?</a>";
    document
      .querySelector(".ilst-inline-item.meta-item.myHdAustria")
      .parentNode.insertBefore(
        satReceiver,
        document.querySelector(".ilst-inline-item.meta-item.myHdAustria")
      );

    document
      .querySelectorAll("#main-navigation .list-inline.list-first li a")
      .forEach((liItem) => {
        if (window.location.pathname == liItem.pathname) {
          liItem.classList.add("active-ab");
        } else {
          liItem.classList.remove("active-ab");
        }
      });

    document
      .querySelectorAll(
        "#mobile-navigation .list-inline.list-first.mm-listview li a"
      )
      .forEach((liItem) => {
        if (window.location.pathname == liItem.pathname) {
          liItem.classList.add("active-cd");
        } else {
          liItem.classList.remove("active-cd");
        }
      });
  },
};

(function pollFor() {
  if (
    document.querySelector(".header-bottom .container #main-navigation") &&
    document.querySelector("#mobile-navigation ul.list-inline")
  ) {
    basicStructure.init();
    console.log("Variation- A: 01");
  } else {
    setTimeout(pollFor, 25);
  }
})();

export default basicStructure;
