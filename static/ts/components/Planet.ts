const slider = document.getElementById("slider");
// console.dir(slider)
const ul: HTMLUListElement | any = document.querySelector("ul");
// console.log(ul.children[0]);
const li = document.querySelectorAll("li");
// console.dir(li);
const liLen: any = li.length;
// console.dir(liLen);
const nextButton: HTMLElement | any = document.getElementById("nextButton");
const prevButton: HTMLElement | any = document.getElementById("prevButton");
//typescript 디버거 tasks.json 빌드 한글로 되있어서 안됬음

// const liWidth = li[0].offsetWidth;
// console.log(liWidth);
const liWidth = 1920;
// console.log(li.length);
// console.dir(li.length - 1);

const totalWidth = liWidth * (liLen + 2);
ul.style.width = `${totalWidth}px`;
// console.log(totalWidth);

let startNum = 0;
let slideSpeed = 0.2;

// let current: number = 0;

//첫 번째, 마지막 슬라이드 복사
let firstChild = ul.firstElementChild;
// console.log(firstChild);
let lastChild = ul.lastElementChild;
// console.log(lastChild);
let clonedFirst = firstChild.cloneNode(true);
// console.log(clonedFirst);
let clonedLast = lastChild.cloneNode(true);
// console.log(clonedLast);
//firstChild에 할당된 것은 firstElementChild 자체의 주소값. dom을 복제하려면 cloneNode()메소드를 사용해야 함

//복사한 슬라이드 추가
ul.appendChild(clonedFirst);
ul.insertBefore(clonedLast, ul.firstElementChild);

ul.style.transform = "translate3d(-" + (liWidth*(startNum + 1)) + "px, 0px, 0px)";

let current = startNum; //현재 슬라이드 인덱스(복사한 것 제외)
// console.log(current);
let currentSlide = ul.children[current]; //현재 슬라이드 dom
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
nextButton.addEventListener('click', ()=>{
  if(current <= liLen -1){
    console.log(current);
    ul.style.transition = slideSpeed + "s";
    ul.style.transform = "translate3d(-" + (liWidth * (current + 2)) + "px, 0px, 0px)";
  }
  if(current === liLen -1){
    //마지막 슬라이드 일 때
    setTimeout(()=>{
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
prevButton.addEventListener('click', ()=>{
  if(current >=0){
    ul.style.transition = slideSpeed + "s";
    ul.style.transform = "translate3d(-" + (liWidth * current) + "px, 0px, 0px)";
  }
  if(current === 0){
    setTimeout(()=>{
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
