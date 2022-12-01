const menuBtn=document.getElementById("hamburger")
const navList=document.getElementById("nav-list")
function menuBtnClick(){
navList.classList.toggle("show")
}
menuBtn.addEventListener("click",menuBtnClick)