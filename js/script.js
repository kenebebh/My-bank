"use strict";

let userDetails = {
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  username: localStorage.getItem("username"),
  loginPassword: localStorage.getItem("loginPassword"),
  accountType: localStorage.getItem("accountType"),
};

const navbarIcon = document.querySelector(".nav--icon-1");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const homePage = document.querySelector(".home-page");
const loginButton = document.querySelector(".login-button");
const loginPage = document.querySelector(".login-page");
const body = document.querySelector(".main");
const closeIcon = document.querySelector(".close");
const errorMessage2EL = document.querySelector(".error-message-container");
const fullNameEL = document.querySelectorAll(".name");

fullNameEL.forEach((element) => console.log(element));

fullNameEL.forEach(
  (person) =>
    (person.textContent = `${userDetails.firstName} ${userDetails.lastName}`)
);

// fake login
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
  validateLogin();
});

const validateLogin = function () {
  if (userDetails.loginPassword === null || userDetails.username === null) {
    errorMessage2EL.textContent = `Please sign up!`;
    errorMessage2EL.classList.remove("hidden");
    setTimeout(() => {
      errorMessage2EL.classList.add("hidden");
    }, 3000);
  } else if (
    loginPasswordEL.value === userDetails.loginPassword &&
    usernameEL.value === userDetails.username
  ) {
    displayHomepage();
  } else {
    errorMessage2EL.classList.remove("hidden");
    setTimeout(() => {
      errorMessage2EL.classList.add("hidden");
    }, 3000);
  }
};
