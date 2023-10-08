"use strict";

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelector('.overlay').style.opacity = 0;
  }, 5000);
  setTimeout(function () {
    document.querySelector('.overlay').remove();
  }, 5100);
});