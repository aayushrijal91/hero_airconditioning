// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"], a[href="#specials"], a[href="#about-us"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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