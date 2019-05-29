/************* Main Js File ************************
    Template Name: Natamok- software Landing Template
    Author: Tanmoy Dhar
    Version: 1.0
    Copyright 2019
****************************************/



    /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";

 /* smooth scroll
  -------------------------------------------------------*/
      $.scrollIt({

        easing: 'swing',      
        scrollTime: 900,       
        activeClass: 'active',
        onPageChange: null,  
        topOffset: -70,
        upKey: 38,              
        downKey: 40

      });

      //mobile Carousel Journey

        if ($(window).width() < 460) {

            $("#journey").owlCarousel({
                items: 1,
                center: true,
                pagination: true,
                slideSpeed: 800,
                nav: false

            });

        }

        //mobile Carousel Custom

        if ($(window).width() < 460) {

            $("#custom").owlCarousel({
                items: 1,
                center: true,
                pagination: true,
                slideSpeed: 800,
                nav: false

            });

        }

        if (/*$(window).navigator.appCodeName === "Safari" && */ $(window).width() < 460) {
            const paralaxes = document.querySelectorAll('.paralax-on');
            const allParalaxes = Array.from(paralaxes);
            console.log(allParalaxes);
            allParalaxes.forEach((element) => {
                element.style.backgroundAttachment = 'scroll';
                console.log(element.style.backgroundAttachment)
            })
        }

 /* Clients Testimonials
  -------------------------------------------------------*/
        $("#c-caro").owlCarousel({
      navigation:  true,
      pagination:false,
      slideSpeed: 800,
      nav:true,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: false,
      singleItem: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:1
        },
        1000:{
          items:2
        }
      }
    });
/*========Stats Counter Setup========*/
    (function(){
        if($("section.counter-area").length > 0) {
            var a = 0;
            $(window).on('scroll', function() {
                var oTop = $('section.counter-area').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('section.counter-area .counter-item .counter').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                    });
                    a = 1;
                }
            });
        }

    })();

    
 /* Screenshot slider
  -------------------------------------------------------*/
          $("#screenshot_slider").owlCarousel({
                loop: true,
                nav: true,
                center: true,
                dots: false,
                autoplay: false,
                autoplayTimeout: 3000,
                navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                autoplayHoverPause:false,
                smartSpeed: 450,
                responsiveClass: true,
                responsive: {
                        0: {
                                items: 1,
                        },
                        600: {
                                items: 1,
                        },
                        1000: {
                                items: 2,
                        }
                }
            });

 /*Client Logo
  -------------------------------------------------------*/
         $("#client-logo").owlCarousel({
                loop: true,
                nav: false,
                center: true,
                dots: false,
                autoplay: false,
                autoplayTimeout: 3000,
                autoplayHoverPause:false,
                smartSpeed: 450,
                responsiveClass: true,
                responsive: {
                        0: {
                                items: 2,
                        },
                        600: {
                                items: 2,
                        },
                        1000: {
                                items: 3,
                        }
                }
            });
// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
       appScreenshotCarousel();

    })(jQuery);
});
                $("#slider").vegas({
          slides: [
              { src: "assets/images/banner/dummy-image.jpg" },
              { src: "assets/images/banner/dummy-image.jpg" },
              { src: "assets/images/banner/dummy-image.jpg" },
              { src: "assets/images/banner/dummy-image.jpg" }
          ]
      });
 /* Navbar
  -------------------------------------------------------*/
     var win = $(window);
           
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 100) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });

    /* close navbar-collapse when a  clicked */
    $(".navbar-nav a").not('.dropdown-toggle').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    /* close navbar-collapse when a  clicked */
    $('.dropdown').on('click', function () {
        $(this).toggleClass("show");
    });
         // ANSWER AND QUESTIOn
            $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().addClass('active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().removeClass('active');
        });

 /* Pricing table
  -------------------------------------------------------*/
        var e = document.getElementById("pricing-table-monthly"),
            d = document.getElementById("pricing-table-yearly"),
            t = document.getElementById("switcher"),   
            m = document.getElementById("monthly-section"),
            y = document.getElementById("yearly-section");

        $('#pricing-table-monthly').on('click', function () {
            t.checked = false;
            e.classList.add("toggler-pircing-is-active");
            d.classList.remove("toggler-pircing-is-active");
            m.classList.remove("inactive");
            y.classList.add("inactive");
        });

        $('#pricing-table-yearly').on('click', function () {
            t.checked = true;
            e.classList.add("toggler-pircing-is-active");
            d.classList.remove("toggler-pircing-is-active");
            m.classList.remove("inactive");
            y.classList.add("inactive");
        });

        $('#switcher-item').on('click', function () {
            d.classList.toggle("toggler-pircing-is-active");
            e.classList.toggle("toggler-pircing-is-active");
            m.classList.toggle("inactive");
            y.classList.toggle("inactive");
        });
   
});

        $(window).ready(function() {
        $('#preload').delay(200).fadeOut('fade');
    });
