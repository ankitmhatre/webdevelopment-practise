"use strict";
// Main heading animation
var heading = "Explore Goa at Ease";

let i = 0;

window.onload = function () {
  var write = setInterval(function () {
    document.getElementById("sec1heading").textContent += heading[i];
    i++;
    if (i > heading.length - 1) {
      clearInterval(write);
    }
  }, 23);
};

// Image Panel Expanding
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
