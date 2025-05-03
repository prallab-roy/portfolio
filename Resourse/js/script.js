
/*header navigation section start*/

let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");

    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";
    }
})

/*header navigation section end*/

/*preloader section start*/

document.body.classList.add('loading');
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0'; // Fade out the preloader
  setTimeout(() => {
    preloader.style.display = 'none';
    document.body.classList.remove('loading');
  }, 500);
});

/*preloader section end*/
