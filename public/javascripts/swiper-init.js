$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        //direction: 'horizontal',
        //loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true
    })
    $('.bg').css('transition', 'all 0.4s ease-out');
    var res = window.location.href.substring(window.location.href.search('#') + 1, window.location.href.length);
    //alert(res);
    // $(window).location.href = "http://www.google.com";

});

/*
function carousel(section_name, item_name) {
    var currentimg = $('#' + section_name + ' .hiddenimage.current');
    $('.' + item_name).css('background-image', 'url(' + currentimg.attr('src') + ')');
    currentimg.removeClass('current');
    $next = currentimg.next('#' + section_name + '.hiddenimage');
    if ($next.length) {
        $next.addClass('current');
    } else {
        $('#' + section_name + ' .hiddenimage:first').addClass('current');
    }
    
}*/

/*For desktop*/

$(function() {
    $('#section1').hover(function() {

    }, function() {

    });

    $('#section2').hover(function() {
        $('.bg').toggleClass('item2');
    }, function() {
        $('.bg').removeClass('item2');
    });

    $('#section3').hover(function() {
        $('.bg').toggleClass('item3');

    }, function() {
        $('.bg').removeClass('item3');
    });

    $('#section4').hover(function() {
        $('.bg').toggleClass('item4');
    }, function() {
        $('.bg').removeClass('item4');
    });

    $(".country_section > .info > ul > li").hover(function() {
        var img_id = 'img_' + $(this).attr('id');
        var section_id = $(this).parent().parent().parent().attr('id');
        var width = $(window).width();
        if (width > 800)
            $('.bg').toggleClass(img_id);
        else {
            $('#' + section_id).toggleClass(img_id);
        }
    }, function() {
        var img_id = 'img_' + $(this).attr('id');
        var width = $(window).width();
        var section_id = $(this).parent().parent().parent().attr('id');
        if (width > 800)
            $('.bg').removeClass(img_id);
        else
            $('#' + section_id).removeClass(img_id);
    });
});


/*
$(function() {
    $('#section1').hover(function() {
        timer = setInterval(function() {
            var currentimg = $('#section1 .hiddenimage.current');
            $('.item1').css('background-image', 'url(' + currentimg.attr('src') + ')');
            $('.item1').css('transition', 'all 0.4s ease');
            currentimg.removeClass('current');
            $next = currentimg.next("#section1 .hiddenimage");
            if ($next.length) {
                $next.addClass('current');
            } else {
                $("#section1 .hiddenimage:first").addClass('current');
            }
        }, 1500);
    }, function() {
        clearInterval(timer);
        $('.item1').css('background-image', '');
    });

    $('#section2').hover(function() {
        $('.bg').toggleClass('item2');
        timer = setInterval(function() {
            var currentimg = $('#section2 .hiddenimage.current');
            $('.item2').css('background-image', 'url(' + currentimg.attr('src') + ')');
            currentimg.removeClass('current');
            $next = currentimg.next("#section2 .hiddenimage");
            if ($next.length) {
                $next.addClass('current');
            } else {
                $("#section2 .hiddenimage:first").addClass('current');
            }
        }, 1500);
    }, function() {
        clearInterval(timer);
        $('.item2').css('background-image', '');
        $('.bg').toggleClass('item2');
    });

    $('#section3').hover(function() {
        $('.bg').toggleClass('item3');
        timer = setInterval(function() {
            var currentimg = $('#section3 .hiddenimage.current');
            $('.item3').css('background-image', 'url(' + currentimg.attr('src') + ')');
            currentimg.removeClass('current');
            $next = currentimg.next("#section3 .hiddenimage");
            if ($next.length) {
                $next.addClass('current');
            } else {
                $("#section3 .hiddenimage:first").addClass('current');
            }
        }, 1500);
    }, function() {
        clearInterval(timer);
        $('.item3').css('background-image', '');
        $('.bg').toggleClass('item3');
    });


    $('#section4').hover(function() {
        $('.bg').toggleClass('item4');
        timer = setInterval(function() {
            var currentimg = $('#section4 .hiddenimage.current');
            $('.item4').css('background-image', 'url(' + currentimg.attr('src') + ')');
            currentimg.removeClass('current');
            $next = currentimg.next("#section4 .hiddenimage");
            if ($next.length) {
                $next.addClass('current');
            } else {
                $("#section4 .hiddenimage:first").addClass('current');
            }
        }, 1500);
    }, function() {
        clearInterval(timer);
        $('.item4').css('background-image', '');
        $('.bg').toggleClass('item4');
    });

    $('#section5').hover(function() {
        $('.bg').toggleClass('item5');
        timer = setInterval(function() {
            var currentimg = $('#section5 .hiddenimage.current');
            $('.item5').css('background-image', 'url(' + currentimg.attr('src') + ')');
            currentimg.removeClass('current');
            $next = currentimg.next("#section5 .hiddenimage");
            if ($next.length) {
                $next.addClass('current');
            } else {
                $("#section5 .hiddenimage:first").addClass('current');
            }
        }, 1500);
    }, function() {
        clearInterval(timer);
        $('.item5').css('background-image', '');
        $('.bg').toggleClass('item5');
    });

});*/