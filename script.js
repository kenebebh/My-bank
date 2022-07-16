"use strict";

const navbarIcon = document.querySelector(".nav--icon-1");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const homePage = document.querySelector(".home-page");

const closeOverlay = function () {
  overlay.classList.add("hidden");
};

const hideNav = function () {
  nav.classList.add("hidden");
};

navbarIcon.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  nav.classList.remove("hidden");
  nav.style.opacity = 100;
});

overlay.addEventListener("click", function () {
  closeOverlay();
  hideNav();
});
