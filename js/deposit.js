const depositAmountEL = document.querySelector(".deposit-amount");
const depositButton = document.querySelector(".deposit-button");
const backButton = document.querySelector(".back-button");

// localStorage.removeItem("movements");

const pushMovement = function (mov) {
  movements.push(mov);
  localStorage.setItem("movements", JSON.stringify(movements));
  userDetails.movements = JSON.parse(localStorage.getItem("movements"));
  // console.log(movements);
  console.log(userDetails.movements);
};

backButton.addEventListener("click", function () {
  location.href = "home.html";
});

depositButton.addEventListener("click", function (e) {
  e.preventDefault();
  amount = depositAmountEL.value;
  pushMovement(amount);
});
