"use strict";
var slider = document.getElementById("slider");
// console.dir(slider)
var ul = document.querySelector("ul");
// console.log(ul)
var li = document.querySelectorAll("li");
// console.log(li)
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");
//typescript 디버거 tasks.json 빌드 한글로 되있어서 안됬음
var liWidth = li[0].offsetWidth;
// console.log(li[0]);
console.log(liWidth);
var totalWidth = li.length * liWidth;
ul.style.width = "".concat(totalWidth, "px");
console.log(totalWidth);
var current = 1;
// function slideCount():any=>{
//   current++;
//   let moving: number | string = current * liWidth - liWidth;
//   ul.style.transform = `translateX(${moving}px)`;
// }
var NslideCount = function () {
    current++;
    var moving = current * liWidth - liWidth;
    ul.style.transform = "translateX(-".concat(moving, "px)");
};
var PslideCount = function () {
    current++;
    var moving = current * liWidth - liWidth;
    ul.style.transform = "translateX(".concat(moving, "px)");
};
// prevButton.addEventListener("click", () => {
//   PslideCount();
// });
nextButton.addEventListener("click", function () {
    NslideCount();
});
//# sourceMappingURL=Planet.js.map