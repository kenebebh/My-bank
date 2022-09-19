"use strict";

const navbarIcon = document.querySelector(".nav--icon-1");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const homePage = document.querySelector(".home-page");
const loginButton = document.querySelector(".login-button");
const loginPage = document.querySelector(".login-page");
const body = document.querySelector(".main");
const closeIcon = document.querySelector(".close");

//fake login
// loginPage.classList.add("hidden");
// body.classList.remove("hidden");
// body.style.opacity = 100;

closeIcon.addEventListener("click", function () {
  closeOverlay();
  hideNav();
});

//function to make the navbar functional
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

//function for login
const displayHomepage = function () {
  loginPage.classList.add("hidden");
  body.classList.remove("hidden");
  body.style.opacity = 100;
};

const displayLoginPage = function () {
  loginPage.classList.remove("hidden");
  body.classList.add("hidden");
  body.style.opacity = 0;
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !body.classList.contains("hidden")) {
    displayLoginPage();
    closeOverlay();
  }
});

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  displayHomepage();
});
