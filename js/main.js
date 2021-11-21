$(function() {
    init();
});

function init() {
    initHeader();
    initFooter();
}

function initHeader() {
    // $("header").load("../templates/header.html");
    initHamburger();
}

function initFooter() {
    // $("footer").load("../templates/footer.html")
}



function initHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}