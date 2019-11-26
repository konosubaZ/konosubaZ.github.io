$(document).ready(function () {
    setTimeout(function () {
        var swiper1 = new Swiper('.swiper1', {
            slidesPerView: 3.5,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
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
            },
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true//修改swiper的父元素时，自动初始化swiper
        });
    }, 300);

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

    $('.column-item-cover').find('span').click(function () {
        console.log('sss');
        if ($(this).hasClass('spanColor')) {
            $(this).removeClass('spanColor').removeClass('rubberBand');
        } else {
            $(this).addClass('spanColor').addClass('rubberBand');
        }
    });

    $(function () {
        $('.zero-preview').click(function (e) {
            $(this).css({'opacity': '0','z-index':'0'});
        });
        $('.zero-img').click(function(e) {
            e.stopPropagation();
        });
    })

});


