const depositAmountEL = document.querySelector(".deposit-amount");
const depositButton = document.querySelector(".deposit-button");
const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", function () {
  location.href = "home.html";
});

depositButton.addEventListener("click", function (e) {
  e.preventDefault();
  amount = depositAmountEL.value;
  console.log(amount);
  userDetails.movements.push(amount);
  console.log(userDetails.movements);
});
