// $(function() {

//     $("#nav_responsive").hide();
//     initMenuResponsive();
//     let hamburger = $(".hamburger");
//     let navMenu = $(".nav-menu");
//     let navLink = $(".nav-link");

//     hamburger.click(mobileMenu);
//     navLink.each(function() {
//         $(this).click(closeMenu);
//     });
// });

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

function initMenuResponsive() {
    $("#hamburger").click(function() {
        $("#nav_responsive").show();
    });
    $("#nav_close").click(function() {
        $("#nav_responsive").hide();
    });
}