//Element selectors
const txtArea = document.querySelector(".txt--area");
const submitBtn = document.querySelector(".submit");
const formContainer = document.querySelector(".form-container");
// Nav Bar Selectors
const logo = document.querySelector(".logo");
const resetButton = document.querySelector(".reset");
const navAbout = document.querySelector(".nav--about");
const navSocial = document.querySelector(".nav--social");
const about = document.getElementById("about");
const social = document.getElementById("social");
const lines = document.querySelectorAll(".nav-line");
const topTxt = document.querySelectorAll(".toptext");
// Text Section Selector
const textSection = document.querySelector(".section");
// Body ::before Selector
const body = document.querySelector(".body");
const bodyBefore = window.getComputedStyle(body, ":before");

console.log(bodyBefore.backgroundColor);

//Submit Event
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(txtArea.value);
  console.log(txtArea.value.length);
  txtArea.value = "";
  formContainer.classList.add("hidden");
});

//Reset Event
resetButton.addEventListener("click", function () {
  formContainer.classList.remove("hidden");
  social.classList.remove("show");
  about.classList.remove("show");
  body.style.setProperty("--beforeOpacity", "1");
});

logo.addEventListener("click", function () {
  formContainer.classList.remove("hidden");
  social.classList.remove("show");
  about.classList.remove("show");
  body.style.setProperty("--beforeOpacity", "1");
});

//About Us Show
navAbout.addEventListener("click", function () {
  about.classList.add("show");
  formContainer.classList.add("hidden");
  social.classList.remove("show");
  body.style.setProperty("--beforeOpacity", "0.2");
});

//Social Show
navSocial.addEventListener("click", function () {
  social.classList.add("show");
  formContainer.classList.add("hidden");
  about.classList.remove("show");
  body.style.setProperty("--beforeOpacity", "0.2");
});

//Mouseover Event on Nav
topTxt[0].addEventListener("mouseover", function () {
  lines[0].style.width = "100%";
});
topTxt[1].addEventListener("mouseover", function () {
  lines[1].style.width = "100%";
});
topTxt[2].addEventListener("mouseover", function () {
  lines[2].style.width = "100%";
});

//Mouseleave Event on Nav
topTxt[0].addEventListener("mouseleave", function () {
  lines[0].style.width = "0%";
});
topTxt[1].addEventListener("mouseleave", function () {
  lines[1].style.width = "0%";
});
topTxt[2].addEventListener("mouseleave", function () {
  lines[2].style.width = "0%";
});
