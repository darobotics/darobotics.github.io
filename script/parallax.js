const FADE_TITLE = 30/100;  // percent of screen
const CHANGE_MENU = 60/100;

const default_color = .35;

const header_height = 70/100;
const header_height_absolute = 90/100;



$( window ).scroll(function() {

        var scrollTop = $( window ).scrollTop();
        var windowHeight = $( window ).height();

        $('.title').css({'opacity': ( windowHeight * FADE_TITLE - scrollTop ) / 100});

        var bottom = -(header_height_absolute*windowHeight - header_height*windowHeight)/2;

        var pageOffsetMax = header_height*windowHeight;
        var pageOffsetPercent = scrollTop/(pageOffsetMax - 0);

        if (scrollTop < windowHeight*header_height) {

                $('#parallax-header').css({'top': (0 - windowHeight - bottom) * pageOffsetPercent});

        }

});


$('.slick').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        speed: 500,
});
