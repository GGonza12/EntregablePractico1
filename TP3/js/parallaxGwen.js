"use strict";

document.addEventListener('DOMContentLoaded', function () {


let ghostSpider = document.querySelector(".ghost-spider");
let paralx0 = document.querySelector(".cardx0");
let paralx1 = document.querySelector(".cardx1");
let paralx2 = document.querySelector(".cardx2");

ghostSpider.onscroll = function () {
  let y = ghostSpider.scrollTop;
  paralx0.style.top = 1800 - y * 2.65 + "px";
  paralx1.style.top = 1200 - y * 0.75 + "px";
  paralx2.style.top = 800 + y * 0.5 + "px";
};


});
