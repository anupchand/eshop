"use strict";

const navToggle = document.querySelector(".nav-toggle-btn");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
