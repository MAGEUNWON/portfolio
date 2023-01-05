"use strict";
var slider = document.getElementById("slider");
// console.dir(slider)
var ul = document.querySelector("ul");
// console.log(ul)
var li = document.querySelectorAll("li");
console.dir(li);
var lastLi = li.length;
console.dir(lastLi);
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");
//typescript 디버거 tasks.json 빌드 한글로 되있어서 안됬음
var liWidth = li[0].offsetWidth;
// console.log(li.length);
// console.dir(li.length - 1);
var totalWidth = li.length * liWidth;
ul.style.width = "".concat(totalWidth, "px");
console.log(totalWidth);
var current = 1;
// let current = 1;
var NslideCount = function () {
    current++;
    console.log(current);
    var moving = current * liWidth - liWidth;
    if (current <= lastLi) {
        ul.style.transform = "translateX(-".concat(moving, "px)");
    }
    else {
        current = 0;
        ul.style.transform = "translateX(-".concat(moving, "px)");
    }
    // ul.style.transform = `translateX(-${moving}px)`;
    // console.log((ul.style.transform = `translateX(-${moving}px)`));
    // if (current === lastLi) {
    //   ul.style.transform = `translateX(-0px)`;
    // }
};
var PslideCount = function () {
    current--;
    // let moving = current * liWidth - liWidth;
    console.log(current);
    if (current <= 0) {
        current = lastLi;
    }
    var backmoving = current * liWidth - liWidth;
    ul.style.transform = "translateX(-".concat(backmoving, "px)");
    // ul.insertAdjacentHTML("afterbegin", li[3]);
    // ul.style.transform = `translateX(-${moving}px)`;
    // console.log((ul.style.transform = `translateX(-${moving}px)`));
};
prevButton.addEventListener("click", function () {
    PslideCount();
});
nextButton.addEventListener("click", function () {
    NslideCount();
});
//# sourceMappingURL=Planet.js.map