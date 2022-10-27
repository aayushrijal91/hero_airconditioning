// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"], a[href="#specials"], a[href="#about-us"], a[href="#services"], a[href="#testimonials"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(() => {
    $('#testimonial-slider').slick({
        slidesToShow: 5,
        arrows: false,
    })
});

function fileUploaded(uploadName, labelId, textColor = '#161616') {
    var file = document.getElementById(uploadName);
    if (file.value != "") {
        var theSplit = file.value.split('\\');
        var fileName = theSplit[theSplit.length - 1];
        $(`#${labelId}`).html(fileName.substring(0, 50));
        $(`#${labelId}`).css('color', textColor);
    }
}

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 500) {
        $('.navigation-bar').addClass('shadow');
        $('#return-to-top').fadeIn(300);
    } else {
        $('.navigation-bar').removeClass('shadow');
        $('#return-to-top').fadeOut(300);
    }
});

$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});