const home = document.querySelector(".homeNav");

home.addEventListener("click",()=>{
    self.location = '../../index.html';
})

setInterval(loadPage,3000);

function loadPage(){
    body.classList.add("body");
}