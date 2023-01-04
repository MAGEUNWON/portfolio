const slider = document.getElementById("slider");
// console.dir(slider)
const ul: HTMLUListElement | any = document.querySelector("ul");
// console.log(ul)
const li = document.querySelectorAll("li");
// console.log(li)
const nextButton: HTMLElement | any = document.getElementById("nextButton");

const prevButton: HTMLElement | any = document.getElementById("prevButton");
//typescript 디버거 tasks.json 빌드 한글로 되있어서 안됬음

const liWidth = li[0].offsetWidth;
// console.log(li[0]);
console.log(liWidth);

const totalWidth = li.length * liWidth;
ul.style.width = `${totalWidth}px`;

console.log(totalWidth);

let current: number = 1;

// function slideCount():any=>{
//   current++;
//   let moving: number | string = current * liWidth - liWidth;
//   ul.style.transform = `translateX(${moving}px)`;
// }

const NslideCount = () => {
  current++;
  let moving = current * liWidth - liWidth;
  ul.style.transform = `translateX(-${moving}px)`;
};

const PslideCount = () => {
  current++;
  let moving = current * liWidth - liWidth;
  ul.style.transform = `translateX(${moving}px)`;
};

// prevButton.addEventListener("click", () => {
//   PslideCount();
// });
nextButton.addEventListener("click", () => {
  NslideCount();
});
