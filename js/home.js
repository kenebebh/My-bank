const navbarIcon = document.querySelector(".nav--icon-1");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const homePage = document.querySelector(".home-page");
const body = document.querySelector(".main");
const closeIcon = document.querySelector(".close");
const fullNameEL = document.querySelectorAll(".name");
const timeOfDayEL = document.querySelector(".time-of-day");

const accountBalance = document.querySelector(".card-account-balance");

// localStorage.removeItem("movements");

const movements = [];
userDetails.movements = JSON.parse(localStorage.getItem("movements"));

let greeting;
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const giveGreeting = function () {
  if (hour < 12) {
    greeting = "morning,";
  } else if (hour < 17) {
    greeting = "afternoon,";
  } else {
    greeting = "evening,";
  }
};

giveGreeting();

const setNames = function () {
  fullNameEL.forEach(
    (person) =>
      (person.textContent = `${userDetails.firstName} ${userDetails.lastName}`)
  );
};

setNames();

closeIcon.addEventListener("click", function () {
  closeOverlay();
  hideNav();
});

//function to make the navbar functional
const closeOverlay = function () {
  overlay.classList.add("hidden");
};

const hideNav = function () {
  nav.classList.add("hidden");
};

navbarIcon.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  nav.classList.remove("hidden");
  nav.style.opacity = 100;
});

overlay.addEventListener("click", function () {
  closeOverlay();
  hideNav();
});

timeOfDayEL.textContent = greeting;

// userDetails.movements[0] = 2000;

// console.log(userDetails.movements[0] == undefined);

if (userDetails.movements[0] != undefined) {
  accountBalance.textContent = userDetails.movements[0];
}

console.log(userDetails.movements);
console.log([20, 10, 15]);
