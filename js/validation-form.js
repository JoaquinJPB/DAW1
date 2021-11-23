$(function() {
    initValidateLoginForm();
    initValidateSignUpForm();
    initValidatePayment();
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
            username: {
                required: true,
                minlength: 6
            },
            password: {
                required: true,
                minlength: 6
            },
        },
        // Mensajes de errores
        messages: {
            username: {
                required: "Please enter a username",
                minLength: "Username must be at least 6 characters"
            },
            password: {
                required: "Please enter a password",
                minLength: "Username must be at least 6 characters"
            },
        },
        submitHandler: function(form) {
            // form.submit();
            window.location.href = "/profile.html";
        }
    });
}

function initValidatePayment() {
    $("#shippingForm").validate({ //#register-form is form id
        rules: {
            name:{
                required: true,
                minlength: 8
            },
            address: "required",
            postal: "required",
            town: "required",
            province: "required",
            phone: {
                required: true,
                minlength: 8
            }
        },
        // Mensajes de errores
        messages: {
            name:{
                required: "Enter Username",
                minlength: 'Your name must be at least 8 characters long',
            }, 
            address: "Enter Address",
            postal: "Enter Postal Code",
            town: "Enter Town",
            province: "Enter Province",
            phone: {
                required: 'Enter Phone',
                minlength: 'Your phone must be at least 8 characters long',
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
}