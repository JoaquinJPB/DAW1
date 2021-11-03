$(function() {
    initValidateLoginForm();
    initValidateSignUpForm();
});


function initValidateSignUpForm() {
    $("#singUpForm").validate({ //#register-form is form id
        rules: {
            complete_name: "required",
            email: {
                required: true,
                email: true
            },
            tel: "required",
            password: {
                required: true,
                minlength: 8
            },
            confirm_password: {
                required: true,
                minlength: 8,
                equalTo: '#password'
            }
        },
        // Mensajes de errores
        messages: {
            complete_name: "Enter Username",
            email: 'Please enter a valid Email Address',
            password: {
                required: 'Please provide a Password',
                minlength: 'Your Password must be at least 8 characters long'
            },
            confirm_password: {
                required: 'Please provide a Password',
                minlength: 'Your Password must be at least 8 characters long',
                equalTo: 'Please enter the same Password as above'
            }
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