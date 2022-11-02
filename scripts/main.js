// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"], a[href="#specials"], a[href="#about-us"], a[href="#services"], a[href="#testimonials"], a[href="#packages"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(() => {
    $("#packages-slider").slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        autoplay: true,
        arrows: false,
        asNavFor: "#package-description-slider"
    });

    $("#package-description-slider").slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: "#packages-slider"
    });

    $('#testimonial-slider').slick({
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "30px"
                }
            }
        ]
    });

    $('#specials-slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "30px"
                }
            }
        ]
    });

    $("#hide-slide-nav").on('click', function() {
        $('.slide-navigation').removeClass('show');
    });

    $('.slide-navigation ul.nav-list a').on('click', function() {
        $('.slide-navigation').removeClass('show');
    });
    
    $('#slide-nav-enquire').on('click', function() {
        $('.slide-navigation').removeClass('show');
    });

    $("#show-slide-nav").on('click', function() {
        $('.slide-navigation').addClass('show');
    });
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