const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("aktif");
    navMenu.classList.toggle("aktif");
});

document.querySelectorAll(".nav-link").forEach(
    n => n.addEventListener("click",() => {
        hamburger.classList.remove("aktif");
        navMenu.classList.remove("aktif");
    }))