const transfers = document.querySelectorAll(".transfer");

transfers.forEach((transfer) => transfer.classList.add("hidden"));

const setPinButton = document.querySelector(".setpin-button");
const setPinContainer = document.querySelector(".pin-box__container");
const transferPage1 = document.querySelector(".transfer-page1");
const transferPage2 = document.querySelector(".transfer-page2");
const transferPage3 = document.querySelector(".transfer-page3");
const transferPage4 = document.querySelector(".transfer-page4");
let pageNumber = 1;

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

  if (e.target.classList.contains("beneficiary-card")) {
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
