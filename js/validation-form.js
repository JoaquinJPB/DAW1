$(function() {

    initValidateLoginForm();
    initValidateSignUpForm();

});


function initValidateSignUpForm() {
    $("#singUpForm").validate({ //#register-form is form id
        rules: {
            complete_name: "required",
            email: {

            },
            phone: {

            },
            password: {

            },
            confirm_password: {
                equalTo: "#password",
            },
        },
        // Mensajes de errores
        messages: {
            complete_name: "Enter Username",
            password: "Enter Passowrd",
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
}

function initValidateLoginForm() {
    //Tambien se puede con #loginForm
    $("#loginForm").validate({ //#register-form is form id
        rules: {
            username: "required",
            password: {
                required: true,
                minlength: 6
            },
        },
        // Mensajes de errores
        messages: {
            username: "Enter Username",
            password: "Enter Passowrd",
            // email: "Enter Valid Email ID"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
}