"use strict";
const setPinButton = document.querySelector(".setpin-button");
const setPinContainer = document.querySelector(".pin-box__container");

const backButton = document.querySelector(".back-button");

const transferPage1 = document.querySelector(".transfer-page1");
const transferPage2 = document.querySelector(".transfer-page2");
const transferPage3 = document.querySelector(".transfer-page3");
const transferPage4 = document.querySelector(".transfer-page4");
const transferPage5 = document.querySelector(".transfer-page5");

const beneficiaryNameEL = document.querySelector(".beneficiary-name");
const accNoEL = document.querySelector("#accNo");
const TransferPinEL = document.querySelector(".pin1");
const pin2EL = document.querySelector(".pin2");
const displayMessageEL = document.querySelector(".no-proceed-message");
const transferAmountEL = document.querySelector("#transfer-amount");
const transferNarrationEL = document.querySelector("#transfer-narration");
const receiverName = document.querySelector(".receiver-name");
const amountSentEL = document.querySelector(".amount-sent");
const descriptionEL = document.querySelector(".transfer-description");
const enterPinEL = document.querySelector("#confirm-pin");

let beneficiaryName,
  accountNumber,
  transferAmount,
  transferNarration,
  enteredPin;
let passwordMatch = false;
let pageNumber = 1;

const transferPin = localStorage.getItem("transferPin");

// const displayErrorMessage = function () {

// }

if (transferPin) {
  setPinContainer.classList.add("hidden");
  transferPage1.classList.remove("hidden");
}

const validateTransferPin = function () {
  let isFourDigits = /^[0-9]{4}$/.test(TransferPinEL.value);

  if (
    isFourDigits &&
    TransferPinEL.value === pin2EL.value &&
    !isNaN(TransferPinEL.value)
  ) {
    passwordMatch = true;
    setPinContainer.classList.add("hidden");
    transferPage1.classList.remove("hidden");
    localStorage.setItem("transferPin", `${TransferPinEL.value}`);
  } else if (!isFourDigits) {
    displayMessageEL.textContent = `password must be four digits`;
    displayMessageEL.classList.remove("hidden");
    setTimeout(() => {
      displayMessageEL.classList.add("hidden");
    }, 3000);
    passwordMatch = false;
  } else if (TransferPinEL.value != pin2EL.value) {
    displayMessageEL.textContent = `passwords don't match`;
    displayMessageEL.classList.remove("hidden");
    setTimeout(() => {
      displayMessageEL.classList.add("hidden");
    }, 3000);
    passwordMatch = false;
  } else {
    displayMessageEL.textContent = `Input must be numbers`;
    displayMessageEL.classList.remove("hidden");
    setTimeout(() => {
      displayMessageEL.classList.add("hidden");
    }, 3000);
    passwordMatch = false;
  }
};

backButton.addEventListener("click", function () {
  location.href = "index.html";
});

setPinButton.addEventListener("click", function (e) {
  e.preventDefault();
  validateTransferPin();
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

  if (clicked.classList.contains("beneficiary-card")) {
    if (clicked.dataset.tab == 1) {
      beneficiaryName = `Banigo Kenebebh Nadari`;
      accountNumber = 3135254164;
    } else if (clicked.dataset.tab == 2) {
      beneficiaryName = `First Lady`;
      accountNumber = 300453217;
    } else {
      beneficiaryName = `A strong man`;
      accountNumber = 2201804211;
    }
    changeActivePage();
  }

  //The effect of these two lines are actually seen in the next page
  beneficiaryNameEL.textContent = beneficiaryName;
  accNoEL.value = accountNumber;
});

console.log(beneficiaryNameEL);

transferPage3.addEventListener("click", function (e) {
  e.preventDefault();
  pageNumber = 3;

  if (e.target.classList.contains("send-money-1")) {
    transferAmount = transferAmountEL.value;
    transferNarration = transferNarrationEL.value;
    changeActivePage();
  }
  // console.log(beneficiaryName);
  receiverName.textContent = beneficiaryName;
  amountSentEL.textContent = transferAmount;
  descriptionEL.textContent = transferNarration;
});

transferPage4.addEventListener("click", function (e) {
  e.preventDefault();
  pageNumber = 4;
  enteredPin = enterPinEL.value;

  if (e.target.classList.contains("confirm-transfer")) {
    if (enteredPin === transferPin) {
      changeActivePage();
    } else if (enteredPin === "") {
      displayMessageEL.textContent = `Please enter transaction pin`;
      displayMessageEL.classList.remove("hidden");
      setTimeout(() => {
        displayMessageEL.classList.add("hidden");
      }, 3000);
    } else if (enteredPin !== transferPin) {
      displayMessageEL.textContent = `Incorrect pin`;
      displayMessageEL.classList.remove("hidden");
      setTimeout(() => {
        displayMessageEL.classList.add("hidden");
      }, 3000);
    } else {
      displayMessageEL.textContent = `Sorry, an error occured`;
      displayMessageEL.classList.remove("hidden");
      setTimeout(() => {
        displayMessageEL.classList.add("hidden");
      }, 3000);
    }
  }
});
