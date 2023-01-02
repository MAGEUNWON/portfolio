import { Planet, NotFound } from "./components/components.js";
// import { NotFound } from "./components/NotFound";
// import Planet from "./components/Planet.js";

const root = document.getElementById("root");
const nav = document.getElementById("nav");

const routes = [
  // { path: "", component: Home },
  { path: "Planet", component: Planet },
];

// const render = async (path) => {
//   try {
//     const component =
//       routes.find((route) => route.path === path)?.component || NotFound;
//     root?.replaceChildren(await component());
//   } catch (err) {
//     console.error(err);
//   }
// };

const render = async () => {
  try {
    const hash = window.location.hash.replace("#", "");
    const component: any =
      routes.find((route) => route.path === hash)?.component || NotFound;
    root?.replaceChildren(await component());
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener("hashchange", render);

window.addEventListener("DOMContentLoaded", render);

// const planet = root?.querySelector("div");
// // console.log(planet)

// const navigateTo = (url) => {
//   history.pushState(null, null, rul);

//   router();
// };
// //페이지 전환 함수

// const router = async () => {
//   const routes = [
//     { path: "/", view: Main },
//     { path: "404", view: NotFound },
//   ];
// };

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.addEventListener("click", (e) => {
//     if (e.target.matches("[data-link")) {
//       e.preventDefault();
//       navigateTo(e.target.href);
//     }
//   });
//   router();
// });
