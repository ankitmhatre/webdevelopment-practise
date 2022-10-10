"use strict";

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
