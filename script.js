function toggMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function copyToClipBoard(txt) {
    navigator.clipboard.writeText(txt);
}
