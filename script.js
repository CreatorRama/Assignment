$(document).ready(function() {
    $('#contact-us-btn').click(function() {
        $('.contact-form').addClass('active');
    });

    $('.contact-btn').click(function(e) {
        e.preventDefault();  
        var $form = $('.contact-form');     
        var formData = $('.contact-form').serialize();

        $.ajax({
            url: 'https://getform.io/f/bnleqqwb',
            method: 'POST',
            data: formData,
            success: function(response) {
                console.log('Form submitted successfully');
                // console.log(response); 
                $form.hide();
            },
            error: function(err) {
                console.error('Error submitting form:', err);
            }
        });
    });

    $('.close-btn').click(function() {
        $('.contact-form').removeClass('active');
        $('body').removeClass('active');
    });

    $('#1').click(function() {
        $('.threeparaimg').attr("src", "background.jpg");
        $('#1').css({'background-color':'#ff3147'});
        $('#2, #3').css({'background-color':'initial'}); // Reset other divs' background color
    });
    $('#2').click(function() {
        $('.threeparaimg').attr("src", "image.png");
        $('#2').css({'background-color':'#ff3147'});
        $('#1, #3').css({'background-color':'initial'}); // Reset other divs' background color
    });
    $('#3').click(function() {
        $('.threeparaimg').attr("src", "crystals.jpg");
        $('#3').css({'background-color':'#ff3147'});
        $('#1, #2').css({'background-color':'initial'}); // Reset other divs' background color
    });

    $('.image').click(function() {
        var readImageContent = $('.read-image').html();
        // var imagecontent=  $('.read-image')    
        $(this).html(readImageContent);
        $(this).addClass('read-image').removeClass('image');
        // imagecontent.css({'margin-right':'73px'})
    })

});