$(function() {
    let location = window.location.pathname;
    if (location == "/shop.html") {
        initSneakers();
    } else if (location = "/index.html") {
        initMostPopularSneakers();
    }
});

function initSneakers() {
    $.getJSON("../sneakers.json", function(json) {
        $.each(json.sneakers, function(key, value) {
            $.get("../templates/product_card_template.html", function(template) {

                $("#product-container").append(template);
                $("#product-container").children().last().find("#sneaker_image").attr('src', value.grid_picture_url);
                $("#product-container").children().last().find("#sneaker_name").html(value.name);
                $("#product-container").children().last().find("#sneaker_id").html(value.id);
                $("#product-container").children().last().on("click", function() {
                    // localStorage.clear();
                    let id = $(this).find("#sneaker_id").text();
                    localStorage.setItem("sneaker_id", id);
                    window.location.href = "/product.html";
                });
                $("#product-container").children().last().find("#price").html(value.retail_price_cents / 100 + "€");
            });
        });
    });
}

function initMostPopularSneakers() {
    $.getJSON("../sneakers.json", function(json) {
        $.each(json.most_popular_sneakers[0].sneakers, function(key, value) {
            $.get("../templates/slide.html", function(template) {

                $(".swiper-wrapper").append(template);
                $(".swiper-wrapper").children().last().find("#most_popular_image").attr('src', value.grid_picture_url);
                $(".swiper-wrapper").children().last().find("#sneaker_name").html(value.name);
                $(".swiper-wrapper").children().last().find("#sneaker_color").html(value.color);
                $(".swiper-wrapper").children().last().find("#price").html(value.retail_price_cents / 100 + "€");
            });
        });
    });
}