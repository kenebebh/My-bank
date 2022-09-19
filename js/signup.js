"use strict";

const signUpButton = document.querySelector(".signup-button");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const username = document.querySelector("#username");
const loginPassword = document.querySelector("#password1");
const loginPasswordCheck = document.querySelector("#password2");
const accountType = document.querySelector("#account-type");

let fullName = `${firstName.value} ${lastName.value}`;
let passwordMatch = false;

signUpButton.addEventListener("click", function (e) {
  if (!passwordMatch) {
    e.preventDefault();
  }
});

const checkPassword = function () {
  if (loginPasswordCheck.value === loginPassword.value) {
    passwordMatch = true;
    console.log(`same`);
  } else {
    passwordMatch = false;
    console.log(`not same`);
  }
};

loginPasswordCheck.addEventListener("keyup", () => {
  checkPassword();
});
