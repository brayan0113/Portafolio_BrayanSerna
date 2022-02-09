document.getElementById("btn_i").addEventListener("click", showNav);
document.getElementById("nav").addEventListener("click", closeNav);
document.getElementById("margin").addEventListener("click", topMargin)

nav = document.getElementById("nav");
background = document.getElementById("back-menu");

function showNav() {
    background.style.display = "block";
    document.getElementById("nav").style.width = "75%";


}
function closeNav() {
  document.getElementById("nav").style.width = "0%";
  background.style.display = "none";
}

function topMargin(){
    document.getElementById("top").style.paddingTop = "75px";
}