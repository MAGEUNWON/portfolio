const slider = document.getElementById("slider");
// console.dir(slider)
const ul: HTMLUListElement | any = document.querySelector("ul");
// console.log(ul)
const li = document.querySelectorAll("li");
console.dir(li);
const lastLi: any = li.length;
console.dir(lastLi);
const nextButton: HTMLElement | any = document.getElementById("nextButton");

const prevButton: HTMLElement | any = document.getElementById("prevButton");
//typescript 디버거 tasks.json 빌드 한글로 되있어서 안됬음

const liWidth = li[0].offsetWidth;
// console.log(li.length);
// console.dir(li.length - 1);

const totalWidth = li.length * liWidth;
ul.style.width = `${totalWidth}px`;

console.log(totalWidth);

let current: number = 1;
// let current = 1;

const NslideCount = () => {
  current++;
  console.log(current);
  let moving = current * liWidth - liWidth;
  if (current <= lastLi) {
    ul.style.transform = `translateX(-${moving}px)`;
  } else {
    current = 0;
    ul.style.transform = `translateX(-${moving}px)`;
  }

  // ul.style.transform = `translateX(-${moving}px)`;
  // console.log((ul.style.transform = `translateX(-${moving}px)`));
  // if (current === lastLi) {
  //   ul.style.transform = `translateX(-0px)`;
  // }
};

const PslideCount = () => {
  current--;
  // let moving = current * liWidth - liWidth;
  console.log(current);
  if (current <= 0) {
    current = lastLi;
  }
  let backmoving = current * liWidth - liWidth;
  ul.style.transform = `translateX(-${backmoving}px)`;
  // ul.insertAdjacentHTML("afterbegin", li[3]);
  // ul.style.transform = `translateX(-${moving}px)`;
  // console.log((ul.style.transform = `translateX(-${moving}px)`));
};

prevButton.addEventListener("click", () => {
  PslideCount();
});

nextButton.addEventListener("click", () => {
  NslideCount();
});
