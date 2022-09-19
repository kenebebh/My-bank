"use strict";
const setPinButton = document.querySelector(".setpin-button");
const setPinContainer = document.querySelector(".pin-box__container");

const backButton = document.querySelector(".back-button");

const transferPage1 = document.querySelector(".transfer-page1");
const transferPage2 = document.querySelector(".transfer-page2");
const transferPage3 = document.querySelector(".transfer-page3");
const transferPage4 = document.querySelector(".transfer-page4");
const transferPage5 = document.querySelector(".transfer-page5");

let pageNumber = 1;

backButton.addEventListener("click", function () {
  location.href = "index.html";
});

setPinButton.addEventListener("click", function (e) {
  e.preventDefault();
  setPinContainer.classList.add("hidden");
  transferPage1.classList.remove("hidden");
});

const changeActivePage = function () {
  document.querySelector(`.transfer-page${pageNumber}`).classList.add("hidden");
  document
    .querySelector(`.transfer-page${pageNumber + 1}`)
    .classList.remove("hidden");
};

transferPage1.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("transfer-link")) {
    changeActivePage();
  }
});

transferPage2.addEventListener("click", function (e) {
  e.preventDefault();
  pageNumber = 2;

  const clicked = e.target.closest(".beneficiary-card");
  console.log(clicked);

  if (clicked.classList.contains("beneficiary-card")) {
    changeActivePage();
  }
});

transferPage3.addEventListener("click", function (e) {
  e.preventDefault();
  pageNumber = 3;

  if (e.target.classList.contains("send-money-1")) {
    changeActivePage();
  }
});

transferPage4.addEventListener("click", function (e) {
  e.preventDefault();
  pageNumber = 4;

  if (e.target.classList.contains("confirm-transfer")) {
    changeActivePage();
  }
});

setPinButton.addEventListener("click", function (e) {
  e.preventDefault();
  setPinContainer.classList.add("hidden");
  transfers.forEach((transfer) => transfer.classList.remove("hidden"));
  console.log("display transfer");
});
