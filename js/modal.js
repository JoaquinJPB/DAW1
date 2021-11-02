const { $ } = require("dom7");

$(function() {

    initLoginModal();
    //initValidateSignUpForm();

});

function initLoginModal() {
    $("#botonModalLogin").click(function {
        $("#loginModal").modal();
    });
}