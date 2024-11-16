function toggMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function copyToClipBoard(txt) {
    navigator.clipboard.writeText(txt);
    const pu = document.querySelector(".popup");
    pu.classList.toggle("show");
    setTimeout(() => pu.classList.toggle("show"), 3000);
}
function zoomImg(index) {
    const img = document.querySelectorAll(".proj-img");
    img[index].classList.toggle("zoom");
}
