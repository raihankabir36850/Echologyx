var desktopNav = [
  {
    name: "packages",
  },
  {
    name: "activeSatPackets",
    text: "Already have a SAT package?",
  },
  {
    name: "orderSatHardware",
  },
  {
    name: "ActivateTvApp",
    text: "Learn about TV App",
  },
  {
    name: "learnAboutHardware",
    text: "Learn about hardware",
  },
];

desktopNav.forEach((element, desktopIndex) => {
  document
    .querySelectorAll("#main-navigation .list-inline.list-first li")
    .forEach((liElem, index) => {
      if (desktopIndex === index) {
        liElem.classList.add(element.name);
        element.text
          ? (liElem.querySelector("font").innerText = element.text)
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
    text: "Already have a SAT package?",
  },
  {
    name: "mbOrderSatHardware",
  },
  {
    name: "ActivateTvApp",
    text: "Learn about TV App",
  },
  {
    name: "mbLearnAboutHardware",
    text: "Learn about hardware",
  },
  {
    name: "streamingPlayer",
  },
  {
    name: "myHdAustria",
  },
  {
    name: "dealers",
    text: "dealers-login",
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
          ? (listItem.querySelector("font").innerText = mobileNav.text)
          : null;
      }
    });
});
