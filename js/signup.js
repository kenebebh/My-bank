"use strict";

// localStorage.removeItem("firstName");
// localStorage.removeItem("lastName");
// localStorage.removeItem("username");
// localStorage.removeItem("loginPassword");
// localStorage.removeItem("accountType");

const signUpButton = document.querySelector(".signup-button");
let firstNameEL = document.querySelector("#firstName");
let lastNameEL = document.querySelector("#lastName");
let usernameEL = document.querySelector("#username");
let loginPasswordEL = document.querySelector("#password1");
let loginPasswordCheckEL = document.querySelector("#password2");
let accountTypeEL = document.querySelector("#account-type");
const errorMessageEL = document.querySelector(".error-message-container");

let passwordMatch = false;

signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (passwordMatch) {
    localStorage.setItem("firstName", `${firstNameEL.value}`);
    localStorage.setItem("lastName", `${lastNameEL.value}`);
    localStorage.setItem("username", `${usernameEL.value}`);
    localStorage.setItem("loginPassword", `${loginPasswordEL.value}`);
    localStorage.setItem("accountType", `${accountTypeEL.value}`);
    location.href = "index.html";
  } else {
    errorMessageEL.classList.remove("hidden");
    setTimeout(() => {
      errorMessageEL.classList.add("hidden");
    }, 3000);
    console.log(`passwords dont match`);
  }
});

const checkPassword = function () {
  if (loginPasswordCheckEL.value === loginPasswordEL.value) {
    passwordMatch = true;
  } else {
    passwordMatch = false;
  }
};

loginPasswordCheckEL.addEventListener("keyup", () => {
  checkPassword();
});
