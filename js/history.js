const backButton = document.querySelector(".back-button");
const containerMovements = document.querySelector(".movements");
const firstnameEL = document.querySelector(".name");
const balanceEL = document.querySelector(".balance");

userDetails.movements = JSON.parse(localStorage.getItem("movements"));

firstnameEL.textContent = userDetails.firstName;

backButton.addEventListener("click", function () {
  location.href = "home.html";
});

const calcBalance2 = function (movs) {
  const balance = movs.reduce((acc, mov) => acc + parseFloat(mov), 0);
  balanceEL.textContent = balance;
};
calcBalance2(userDetails.movements);

// let type = "deposit";
// let movDesc =
//   type == "deposit" ? `You deposited money` : `You transferred money`;
// console.log(movDesc);

const displayMovements = function (movs) {
  containerMovements.innerHTML = "";

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    let imgSrc =
      type == "deposit" ? "assets/arrow-up2.svg" : "assets/arrow-down2.svg";
    let positiveMovText = Math.abs(mov);
    let movDesc =
      type == "deposit"
        ? `You deposited ${mov}`
        : `You transferred ${positiveMovText}`;
    console.log(movDesc);

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        <img src="${imgSrc}" alt="${type}" class="">
        </div>
        <div class="movements__info">
            <div class="movements__description">${movDesc}</div>
            <div class="movements__date">3 days ago</div>
        </div>
      <div class="movements__value ${type}-value">${mov}</div>
    </div>
      `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(userDetails.movements);
