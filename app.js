let navElt = document.getElementById("nav-content"),
  closeBtnElt = document.getElementById("closeBtn"),
  iconMenuElt = document.getElementById("icon-menu"),
  anchorNavElts = document.getElementsByClassName("a-nav");

function openNav() {
  navElt.style.width = "50vw";
  closeBtnElt.style.display = "block";
}

function closeNav() {
  navElt.style.width = "0";
  closeBtnElt.style.display = "none";
}

// Events Listener

iconMenuElt.addEventListener("click", openNav);

closeBtnElt.addEventListener("click", closeNav);

for (let i = 0; i < anchorNavElts.length; i++) {
  anchorNavElts[i].addEventListener("click", closeNav);
}
