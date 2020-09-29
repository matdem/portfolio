let navElt = document.getElementById("nav-content"),
  closeBtnElt = document.getElementById("closeBtn"),
  iconMenuElt = document.getElementById("icon-menu"),
  anchorNavElts = document.getElementsByClassName("a-nav"),
  smallerScreenWidth = window.matchMedia("(max-width: 600px)");

function openNav() {
  navElt.style.width = "50vw";
  closeBtnElt.style.visibility = "visible";
  closeBtnElt.style.display = "block";
}

function closeNav() {
  navElt.style.width = "0";
  closeBtnElt.style.visibility = "hidden";
}

function addEventToNavAnchor(matchMedia) {
  if (matchMedia.matches) {
    for (let i = 0; i < anchorNavElts.length; i++) {
      anchorNavElts[i].addEventListener("click", closeNav);
    }
    navElt.style.width = "0";
  } else {
    for (let i = 0; i < anchorNavElts.length; i++) {
      anchorNavElts[i].removeEventListener("click", closeNav);
    }
    navElt.style.width = "18rem";
  }
}

// Add Events at run time
addEventToNavAnchor(smallerScreenWidth);

// Events Listener

iconMenuElt.addEventListener("click", openNav);

closeBtnElt.addEventListener("click", closeNav);

smallerScreenWidth.addListener(addEventToNavAnchor);
