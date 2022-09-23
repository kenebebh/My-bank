const navbarIcon = document.querySelector(".nav--icon-1");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const homePage = document.querySelector(".home-page");
const body = document.querySelector(".main");
const closeIcon = document.querySelector(".close");
const fullNameEL = document.querySelectorAll(".name");
const timeOfDayEL = document.querySelector(".time-of-day");

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
timeOfDayEL.textContent = greeting;

fullNameEL.forEach(
  (person) =>
    (person.textContent = `${userDetails.firstName} ${userDetails.lastName}`)
);

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
