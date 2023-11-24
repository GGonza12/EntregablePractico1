"use strict";

document.addEventListener('DOMContentLoaded', function () {


let paralx0 = document.querySelector(".cardx0");
let paralx1 = document.querySelector(".cardx1");
let paralx2 = document.querySelector(".cardx2");
window.onscroll = function () {

  let y = window.scrollY;
  paralx0.style.top = 200 - y * 0.15 + "px";
  paralx1.style.top = 70 - y * 0.13 + "px";
  paralx2.style.top = -100 - y * 0.1 + "px";
};


});
