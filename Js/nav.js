document.getElementById("btn_i").addEventListener("click", showNav);
document.getElementById("nav").addEventListener("click", closeNav);

nav = document.getElementById("nav");
background = document.getElementById("back-menu");

function showNav() {
    nav.style.right = "0px";
    background.style.display = "block";

}
function closeNav() {
    nav.style.right = "-280px";
    background.style.display = "none";
}