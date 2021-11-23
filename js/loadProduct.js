$(function() {
    loadProductData();
});

function loadProductData() {
    $.getJSON("../sneakers.json", function(json) {
        let sneaker_id = localStorage.getItem("sneaker_id");
        let sneaker = json.sneakers.find(item => item.id == sneaker_id);
        console.log(sneaker);
        $(".sneaker_image").attr('src', sneaker.main_picture_url);
        $(".sneaker_title").html(sneaker.name);
        $(".sneaker_subtitle").html(sneaker.details);
        $(".sneaker_price").html(sneaker.retail_price_cents / 100 + "€");
        let size_range = sneaker.size_range.sort(function(a, b) { return a - b });
        $.each(size_range, function(key, value) {
            $.get("../templates/size_template.html", function(template) {
                $(".size_container").append(template);
                $(".size_container").children().last().find(".size").html(value);
            });
        });
        // localStorage.clear();
    });
}