const depositAmountEL = document.querySelector(".deposit-amount");
const depositButton = document.querySelector(".deposit-button");
const backButton = document.querySelector(".back-button");
const depositMessageEL = document.querySelector(".deposit-message-container");

// localStorage.removeItem("movements");

const displayTransferMessage = function (message) {
  depositMessageEL.textContent = message;
  depositMessageEL.classList.remove("hidden");
  setTimeout(() => {
    depositMessageEL.classList.add("hidden");
  }, 3000);
};

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
  if (amount > 0) {
    pushMovement(amount);
    depositAmountEL.value = "";
    displayTransferMessage(
      `Transfer of ${amount} to your account was succesful`
    );
  } else {
    displayTransferMessage(
      `Transfer unsuccesful, please input positive numbers`
    );
  }
});
