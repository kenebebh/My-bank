const depositAmountEL = document.querySelector(".deposit-amount");
const depositButton = document.querySelector(".deposit-button");
const backButton = document.querySelector(".back-button");
const depositMessageEL = document.querySelector(".deposit-message-container");
let movements3 = [];
// movements3 = JSON.parse(localStorage.getItem("movements"));
// userDetails.movements = JSON.parse(localStorage.getItem("movements"));

// localStorage.removeItem("movements");

const displayTransferMessage = function (message) {
  depositMessageEL.textContent = message;
  depositMessageEL.classList.remove("hidden");
  setTimeout(() => {
    depositMessageEL.classList.add("hidden");
  }, 3000);
};

const pushMovement = function (mov) {
  // mov > 0 ? movements.push(mov) : movements.push(-mov);
  movements3.push(+mov);
  localStorage.setItem("movements", JSON.stringify(movements3));
  userDetails.movements = JSON.parse(localStorage.getItem("movements"));
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
