const transfers = document.querySelectorAll(".transfer");

transfers.forEach((transfer) => transfer.classList.add("hidden"));

const setPinButton = document.querySelector(".setpin-button");
const setPinContainer = document.querySelector(".pin-box__container");

setPinButton.addEventListener("click", function (e) {
  e.preventDefault();
  setPinContainer.classList.add("hidden");
  transfers.forEach((transfer) => transfer.classList.remove("hidden"));
  console.log("display transfer");
});
