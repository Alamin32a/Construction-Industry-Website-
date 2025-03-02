(function($) {
    "use strict";


    /*===========================================
    	=            Windows Load          =
    =============================================*/
    $(window).on('load', function() {
        preloader();
        wowAnimation();
        aosAnimation();
    });


    /*===========================================
    	=            Preloader          =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    };


    /*===========================================
    	=    		Mobile Menu			      =
    =============================================*/
    //SubMenu Dropdown Toggle
    if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
        $('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
    }

    //Mobile Nav Hide Show
    if ($('.tgmobile__menu').length) {

        var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
        $('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(300);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    };


    /*===========================================
    	=     Menu sticky & Scroll to top      =
    =============================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $('.scroll-to-target').removeClass('open');
            $("#header-fixed-height").removeClass("active-height");

        } else {
            $("#sticky-header").addClass("sticky-menu");
            $('.scroll-to-target').addClass('open');
            $("#header-fixed-height").addClass("active-height");
        }
    });


    /*===========================================
    	=           Scroll Up  	         =
    =============================================*/
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 0);

        });
    }


    /*===========================================
    	=          Data Background    =
    =============================================*/
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });


    /*=============================================
    	=            Header Search            =
    =============================================*/
    $(".search-open-btn").on("click", function() {
        $(".search__popup").addClass("search-opened");
        $(".search-popup-overlay").addClass("search-popup-overlay-open");
    });
    $(".search-close-btn").on("click", function() {
        $(".search__popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });

    /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
    $(".menu-tigger").on("click", function() {
        $(".offCanvas__info, .offCanvas__overly").addClass("active");
        return false;
    });
    $(".menu-close, .offCanvas__overly").on("click", function() {
        $(".offCanvas__info, .offCanvas__overly").removeClass("active");
    });

    /*=============================================
    	=        Slider Active		      =
    =============================================*/
    var sliderSwiper = new Swiper('.slider-active', {
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 6000,
        },
    });


    /*=============================================
    	=        Slider Active Two	      =
    =============================================*/
    var sliderSwiper = new Swiper('.slider-active-two', {
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 6000,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-prev",
        },
    });

    /*=============================================
    	=        Slider Active Three		      =
    =============================================*/
    var sliderSwiper = new Swiper('.slider-active-three', {
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 6000,
        },
    });


    /*=============================================
    	=        Project Active		      =
    =============================================*/
    var projectSwiper = new Swiper('.project-active', {
        // Optional parameters
        slidesPerView: 2,
        spaceBetween: 24,
        loop: true,
        breakpoints: {
            '1500': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev",
        },
    });


    /*=============================================
    	=        Project Active Two	      =
    =============================================*/
    var projectTwoSwiper = new Swiper('.project__active-two', {
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".projectTwo-button-next",
            prevEl: ".projectTwo-button-prev",
        },
    });

    /*=============================================
    	=        Brand Active		      =
    =============================================*/
    var brandSwiper = new Swiper('.brand-active', {
        // Optional parameters
        slidesPerView: 5,
        spaceBetween: 24,
        loop: true,
        breakpoints: {
            '1500': {
                slidesPerView: 5,
            },
            '1200': {
                slidesPerView: 5,
            },
            '992': {
                slidesPerView: 4,
            },
            '768': {
                slidesPerView: 3,
            },
            '576': {
                slidesPerView: 3,
            },
            '0': {
                slidesPerView: 2,
            },
        },
    });


    /*=============================================
    	=          History active              =
    =============================================*/
    var swiper2 = new Swiper(".history__active", {
        spaceBetween: 24,
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            '1500': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1.5,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: ".history-button-next",
            prevEl: ".history-button-prev",
        },
    });


    /*=============================================
    	=        Blog Thumb Active		      =
    =============================================*/
    var blogThumbSwiper = new Swiper('.blog-thumb-active', {
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: ".blog-button-next",
            prevEl: ".blog-button-prev",
        },
    });

    /*=============================================
    	=        Related Shop Active		      =
    =============================================*/
    var shopSwiper = new Swiper('.related__shop-active', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            '1500': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });


    /*=============================================
    	=        Similar Project Active		      =
    =============================================*/
    var similarSwiper = new Swiper('.similar__project-active', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            '1500': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });


    /*=============================================
    	=       Testimonial Active        =
    =============================================*/
    var swiper2 = new Swiper(".testimonial__active", {
        spaceBetween: 24,
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            '1500': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev",
        },
    });

    /*=============================================
    	=        Team Social Active 	       =
    =============================================*/
    $('.social-toggle-icon').on('click', function() {
        $(this).parent().find('ul').slideToggle(400);
        $(this).find('i').toggleClass('fa-times');
        return false;
    });


    /*=============================================
    	=    		Services Active  	       =
    =============================================*/
    function mediaSize() {
        /* Set the matchMedia */
        if (window.matchMedia('(min-width: 768px)').matches) {
            const panels = document.querySelectorAll('.col-custom')
            panels.forEach(panel => {
                panel.addEventListener('click', () => {
                    removeActiveClasses()
                    panel.classList.add('active')
                })
            })

            function removeActiveClasses() {
                panels.forEach(panel => {
                    panel.classList.remove('active')
                })
            }

        } else {
            /* Reset for CSS changes â€“ Still need a better way to do this! */
            $(".col-custom").addClass("active");
        }
    };
    mediaSize();

    /*===========================================
    	=       TweenMax Active   =
    =============================================*/
    $(".tg-motion-effects").mousemove(function(e) {
        parallaxIt(e, ".tg-motion-effects1", 15);
        parallaxIt(e, ".tg-motion-effects2", 5);
        parallaxIt(e, ".tg-motion-effects3", -10);
        parallaxIt(e, ".tg-motion-effects4", 30);
        parallaxIt(e, ".tg-motion-effects5", -50);
        parallaxIt(e, ".tg-motion-effects6", -20);
    });

    function parallaxIt(e, target_class, movement) {
        var $wrap = $(e.target).parents(".tg-motion-effects");
        if (!$wrap.length) return;
        var $target = $wrap.find(target_class);
        var relX = e.pageX - $wrap.offset().left;
        var relY = e.pageY - $wrap.offset().top;

        TweenMax.to($target, 1, {
            x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
            y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
        });
    };


    /*=============================================
    	=    		Isotope	Active  	      =
    =============================================*/
    $('.project-active-two').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.project-active-two').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
        // filter items on button click
        $('.project__menu-nav').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

    });
    //for menu active class
    $('.project__menu-nav button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });



    /*===========================================
    	=         Marquee Active         =
    =============================================*/
    if ($(".marquee_mode").length) {
        $('.marquee_mode').marquee({
            speed: 20,
            gap: 35,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }


    /*=============================================
    	=    	 Slider Range Active  	         =
    =============================================*/
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 400,
        values: [60, 300],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));


    /*=============================================
    	=    		Cart Active 	        =
    =============================================*/
    $('.qtybutton-box span').on("click", function() {
        var $input = $(this).parents('.num-block').find('input.in-num');
        if ($(this).hasClass('minus')) {
            var count = parseFloat($input.val()) - 1;
            count = count < 1 ? 1 : count;
            if (count < 2) {
                $(this).addClass('dis');
            } else {
                $(this).removeClass('dis');
            }
            $input.val(count);
        } else {
            var count = parseFloat($input.val()) + 1
            $input.val(count);
            if (count > 1) {
                $(this).parents('.num-block').find(('.minus')).removeClass('dis');
            }
        }
        $input.change();
        return false;
    });




    /*===========================================
          =       Odometer Active    =
    =============================================*/
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });


    /*===========================================
    	=        Magnific Popup    =
    =============================================*/
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    /*===========================================
    	=        Wow Active      =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


    /*===========================================
    	=           Aos Active       =
    =============================================*/
    function aosAnimation() {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
            disable: 'mobile',
        });
    }

    /*===========================================
    	=    		 Cart Active  	         =
    =============================================*/
    $(window).on("load", function() {
        if ($(".curved-circle").length) {
            $(".curved-circle").circleType({
                position: "absolute",
                dir: 1,
                radius: 280,
                forceHeight: true,
                forceWidth: true,
            });
        }
    });

})(jQuery);