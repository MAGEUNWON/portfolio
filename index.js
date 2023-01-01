var root = document.getElementById('root');
var planet = root === null || root === void 0 ? void 0 : root.querySelector('div');
// console.log(planet)


document.addEventListener("DOMContentLoaded", ()=>{
  document.body.addEventListener("click", e=>{
    if(e.target.matches("[data-link")){
      e.preventDefault();
      navigateTo(e.target.href)
    }
  });
  router();
})