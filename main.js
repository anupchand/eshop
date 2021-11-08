"use strict";

const navToggle = document.querySelector(".nav-toggle-btn");
const nav = document.querySelector(".nav");
const topBarHeight = document.querySelector(".top-bar").offsetHeight;

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

// First we get the viewport height and we multiply it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

let scrH = screen.height;
let scrWidth = screen.width;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the load event

window.addEventListener("load", () => {
  // We execute the same script as before

  if (scrH <= 500) {
    // if mobile is in landscape mode
    document.documentElement.style.setProperty("--computed", `120vh`);
    document.documentElement.style.setProperty(
      "--nav-height",
      `${topBarHeight}px`
    );
    console.log(`Height <= 500`);
  }

  if (scrWidth <= 500) {
    // if mobile is in potrait mode
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty(
      "--nav-height",
      `${topBarHeight}px`
    );
    console.log(`Width <= 500`);
  }
});

/*Update copyright year automatically as per the current Year*/
document.getElementById("thisYear").innerHTML = new Date().getFullYear();
