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

const form = document.forms[0];
console.log(form);
let firstName, lastName, username, loginPassword, accountType;

let passwordMatch = false;

signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.setItem("firstName", `${firstNameEL.value}`);
  localStorage.setItem("lastName", `${lastNameEL.value}`);
  localStorage.setItem("username", `${usernameEL.value}`);
  localStorage.setItem("loginPassword", `${loginPasswordEL.value}`);
  localStorage.setItem("accountType", `${accountTypeEL.value}`);

  // firstName = localStorage.getItem("firstName");
  // lastName = localStorage.getItem("lastName");
  // username = localStorage.getItem("username");
  // loginPassword = localStorage.getItem("loginPassword");
  // accountType = localStorage.getItem("accountType");

  location.href = "index.html";
});

console.log(firstNameEL);

console.log(firstName, lastName, username, loginPassword, accountType);

const checkPassword = function () {
  if (loginPasswordCheckEL.value === loginPasswordEL.value) {
    passwordMatch = true;
    console.log(`same`);
  } else {
    passwordMatch = false;
  }
};

loginPasswordCheckEL.addEventListener("keyup", () => {
  checkPassword();
});
