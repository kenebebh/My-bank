const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", function () {
  location.href = "home.html";
});
userDetails.movements = JSON.parse(localStorage.getItem("movements"));

const firstnameEL = document.querySelector(".name");
const balanceEL = document.querySelector(".balance");

firstnameEL.textContent = userDetails.firstName;

const calcBalance2 = function (movs) {
  const balance = movs.reduce((acc, mov) => acc + parseFloat(mov), 0);
  balanceEL.textContent = balance;
};
calcBalance2(userDetails.movements);
