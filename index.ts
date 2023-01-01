const root = document.getElementById('root'); 
const planet = root?.querySelector('div');
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