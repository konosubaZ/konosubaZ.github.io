$(document).ready(function () {
    var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 3.5,
        autoplay: true,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            }
        }
    });

    ISnavbar();

    function ISnavbar() {
        var new_scroll_position = 0;
        var last_scroll_position;
        var header = $('.navbar-default');
        window.addEventListener('scroll', function (e) {
            last_scroll_position = window.scrollY;

            // Scrolling down
            if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
                header.removeClass('slideDown').addClass('slideUp');

                // Scrolling up
            } else if (new_scroll_position > last_scroll_position) {
                header.removeClass('slideUp').addClass('slideDown');
            }

            new_scroll_position = last_scroll_position;
        });
    }

    $('.slide-img').click(function () {
        var imgSrc = $(this).find('img')[0].src;
        $('.zero-preview').css({'opacity': '1', 'z-index': '99999'});
        $('.zero-preview').find('img').attr('src', imgSrc);
    });
    bannerAnimate();

    function bannerAnimate() {
        $('.banner').find('.swiper-slide').hover(function () {
            $(this).find('.slide-msg').stop().animate({opacity: 1});
            $(this).find('img').stop().css('transform', 'scale(1.2)').css('filter', 'blur(5px)');
        }, function () {
            $(this).find('.slide-msg').stop().animate({opacity: 0});
            $(this).find('img').stop().css('transform', 'scale(1)').css('filter', 'blur(0)');
        })
    }

    (function () {
        $('.exchange').click(function () {
            var timer;
            var spanIcon = $(this).find('span').eq(0);
            clearTimeout(timer);
            if (spanIcon.hasClass('xuanz')) {
                spanIcon.removeClass('xuanz');
            } else {
                spanIcon.addClass('xuanz');
                timer = setTimeout(function () {
                    spanIcon.removeClass('xuanz');
                }, 500);
            }
        })
    }())

    recommend();

    function recommend() {
        $('.recommend-item').hover(function () {
            $(this).find('img').stop().css('transform', 'scale(1.2)');
            $(this).find('.recommend-table').stop().animate({bottom: '-25px'}, 200);
        }, function () {
            $(this).find('img').stop().css('transform', 'scale(1)');
            $(this).find('.recommend-table').stop().animate({bottom: '5px'}, 200);
        })
    }

    columnSpan();

    function columnSpan() {
        $('.column-item-cover').find('span').click(function () {
            console.log('sss');
            if ($(this).hasClass('spanColor')) {
                $(this).removeClass('spanColor').removeClass('rubberBand');
            } else {
                $(this).addClass('spanColor').addClass('rubberBand');
            }
        })
    }

});


