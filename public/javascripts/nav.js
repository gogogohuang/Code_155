/*jQuery to collapse the navbar on scroll */
$(window).scroll(function() {
    if ($(".navbar").offset().top > 10) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/*jQuery for page scrolling feature - requires jQuery Easing plugin*/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $(".navbar-toggle").on('click', function() {
        $(this).toggleClass("side-cross");
    });
})

/*Slide Show*/

var $ = jQuery.noConflict();

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "fade",
        slideshow: false,
        prevText: "",
        nextText: ""
    });

    $(function() {
        $('.show_menu').click(function() {
            $('.menu').fadeIn();
            $('.show_menu').fadeOut();
            $('.hide_menu').fadeIn();
        });
        $('.hide_menu').click(function() {
            $('.menu').fadeOut();
            $('.show_menu').fadeIn();
            $('.hide_menu').fadeOut();
        });
    });
});