"use strict";

let userDetails = {
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  username: localStorage.getItem("username"),
  loginPassword: localStorage.getItem("loginPassword"),
  accountType: localStorage.getItem("accountType"),
};

const loginButton = document.querySelector(".login-button");
const loginPage = document.querySelector(".login-page");
const errorMessage2EL = document.querySelector(".error-message-container");

const displayErrorMessage2 = function () {
  errorMessage2EL.classList.remove("hidden");
  setTimeout(() => {
    errorMessage2EL.classList.add("hidden");
  }, 3000);
};

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  validateLogin();
});

const validateLogin = function () {
  if (userDetails.loginPassword === null || userDetails.username === null) {
    errorMessage2EL.textContent = `Please sign up!`;
    displayErrorMessage2();
  } else if (
    loginPasswordEL.value === userDetails.loginPassword &&
    usernameEL.value === userDetails.username
  ) {
    location.href = "home.html";
  } else {
    displayErrorMessage2();
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    validateLogin();
  }
});
