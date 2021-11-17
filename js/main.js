// const { $ } = require("dom7");

$(function() {
    init();
});

function init() {
    initHamburger();
    initJSON();
    loadProducts();
}

function loadProducts() {
    // $(".product-container").load("../product_card_template.html");
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

    function initMenuResponsive() {
        $("#hamburger").click(function() {
            $("#nav_responsive").show();
        });
        $("#nav_close").click(function() {
            $("#nav_responsive").hide();
        });
    }
}

function initJSON() {
    $.getJSON("data.json", function(json) {
        console.log(json.Products);
        $.each(json.Products, function(key, value) {
            // $(".product-container").load("../product_card_template.html");
            $.get("../product_card_template.html", function(html) {
                $(".product-container").append(html);
            });
        });
    });

}