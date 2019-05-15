$(document).ready(function() {
    "use strict";
    function triggerTag () {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'formSubmission', //you can actually name this even whatever you want
            'formID': 'contact-form'
        });
    }

    $('form#contact-form').submit(function() {
        $('form#contact-form .error').remove();
        var hasError = false;
        $('.requiredField').each(function() {
            if(jQuery.trim($(this).val()) == '') {
                var labelText = $(this).prev('label').text();
                $(this).parent().append('<span class="error">You forgot to enter your '+labelText+'</span>');
                $(this).addClass('inputError');
                hasError = true;
            } else if($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(jQuery.trim($(this).val()))) {
                    var labelText = $(this).prev('label').text();
                    $(this).parent().append('<span class="error">You entered an invalid '+labelText+'</span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });
        if(!hasError) {
            $('form#contact-form input.submit').fadeOut('normal', function() {
                $(this).parent().append('');
            });

            $("#loader").show();
            $.ajax({
                url: "assets/contact/contact.php",
                type: "POST",
                data:  new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                success: function(data){
                    $('form#contact-form').slideUp("fast", function() {
                        $(this).before('<div class="success">Thank you. Your Email was sent successfully.<br> We will contact you within 24 hours.</div>' +
                            '<div class="col-md-12 text-center"> <a id="contact-submit" href="https://www.azoft.com/blog/" class="div-btn success-button">Take a look at Our Blog</a> </div>')
                        $("#loader").hide();
                    })
                }
            });

            triggerTag();

            return false;
        }

    });
});