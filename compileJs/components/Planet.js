"use strict";
//typescript 디버거 tasks.json 빌드 한글로 되있어서 안됬었음. 바꿔서 이제 디버거 됨. 
var slider = document.getElementById("slider");
// console.dir(slider)
var ul = document.querySelector("ul");
// console.log(ul.children[0]);
var li = document.querySelectorAll("li");
// console.dir(li);
var liLen = li.length;
// console.dir(liLen);
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");
var git = document.getElementById("git");
console.log(git);
var jekyll = document.getElementById("jekyll");
var liWidth = li[0].offsetWidth;
// console.log(liWidth);
// const liWidth = 1920;
// console.log(li.length);
// console.dir(li.length - 1);
var totalWidth = liWidth * (liLen + 2);
ul.style.width = "".concat(totalWidth, "px");
// console.log(totalWidth);
var startNum = 0;
var slideSpeed = 0.2;
// let current: number = 0;
//첫 번째, 마지막 슬라이드 복사
var firstChild = ul.firstElementChild;
// console.log(firstChild);
var lastChild = ul.lastElementChild;
// console.log(lastChild);
var clonedFirst = firstChild.cloneNode(true);
// console.log(clonedFirst);
var clonedLast = lastChild.cloneNode(true);
// console.log(clonedLast);
//firstChild에 할당된 것은 firstElementChild 자체의 주소값. dom을 복제하려면 cloneNode()메소드를 사용해야 함
//복사한 슬라이드 추가
ul.appendChild(clonedFirst);
ul.insertBefore(clonedLast, ul.firstElementChild);
ul.style.transform = "translate3d(-" + (liWidth * (startNum + 1)) + "px, 0px, 0px)";
var current = startNum; //현재 슬라이드 인덱스(복사한 것 제외)
// console.log(current);
var currentSlide = ul.children[current]; //현재 슬라이드 dom
// // console.log(currentSlide);
currentSlide.classList.add('slide_active');
// console.log(currentSlide);
// const NslideCount = () => {
//   current++;
//   // console.log(current);
//   let moving = current * liWidth - liWidth;
//   if (current <= liLen) {
//     ul.style.transform = `translateX(-${moving}px)`;
//   } else {
//     current = 0;
//     ul.style.transform = `translateX(-${moving}px)`;
//   }
//   // ul.style.transform = `translateX(-${moving}px)`;
//   // console.log((ul.style.transform = `translateX(-${moving}px)`));
//   // if (current === lastLi) {
//   //   ul.style.transform = `translateX(-0px)`;
//   // }
// };
//nextButton Event
nextButton.addEventListener('click', function () {
    if (current <= liLen - 1) {
        console.log(current);
        ul.style.transition = slideSpeed + "s";
        ul.style.transform = "translate3d(-" + (liWidth * (current + 2)) + "px, 0px, 0px)";
    }
    if (current === liLen - 1) {
        //마지막 슬라이드 일 때
        setTimeout(function () {
            ul.style.transition = "0s";
            //0.3초동안 복사한 첫번째 이미지에서 진짜 첫번째 위치로 이동
            ul.style.transform = "translate3d(-" + liWidth + "px, 0px, 0px)";
        }, slideSpeed);
        current = -1;
    }
    ul.classList.remove('slide_active');
    currentSlide = ul.children[++current];
    console.log(currentSlide);
    ul.classList.add('slide_active');
});
// const PslideCount = () => {
//   current--;
//   // let moving = current * liWidth - liWidth;
//   console.log(current);
//   if (current <= 0) {
//     current = liLen;
//   }
//   let backmoving = current * liWidth - liWidth;
//   ul.style.transform = `translateX(-${backmoving}px)`;
//   // ul.insertAdjacentHTML("afterbegin", li[3]);
//   // ul.style.transform = `translateX(-${moving}px)`;
//   // console.log((ul.style.transform = `translateX(-${moving}px)`));
// };
//prevButton Event
prevButton.addEventListener('click', function () {
    if (current >= 0) {
        ul.style.transition = slideSpeed + "s";
        ul.style.transform = "translate3d(-" + (liWidth * current) + "px, 0px, 0px)";
    }
    if (current === 0) {
        setTimeout(function () {
            ul.style.transition = "0s";
            ul.style.transform = "translate3d(-" + (liWidth * lastChild) + "px, 0px, 0px)";
        }, slideSpeed);
        current = liLen;
    }
    ul.classList.remove('slide_active');
    currentSlide = ul.children[--current];
    console.log(currentSlide);
    ul.classList.add('slide_active');
});
// prevButton.addEventListener("click", () => {
//   PslideCount();
// });
// nextButton.addEventListener("click", () => {
//   NslideCount();
// });
//깃허브 페이지 이동
git.addEventListener('click', function () {
    console.log('깃클릭');
    window.open('https://github.com/MAGEUNWON', 'target=_blank', 'fullscreen');
});
//jekyll 블로그 이동
jekyll.addEventListener('click', function () {
    window.open('https://mageunwon.github.io/');
});
//# sourceMappingURL=Planet.js.map