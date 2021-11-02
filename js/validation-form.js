$(function() {
    //Tambien se puede con #loginForm
    $("form[name='loginForm']").validate({ //#register-form is form id
        rules: {
            username: "required",
            password: {
                required: true,
                minlength: 6
            },
            //passowrd:  is corresponding input name
            // email: { //email is corresponding input name
            //     required: true,
            //     email: true
            // },
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

});