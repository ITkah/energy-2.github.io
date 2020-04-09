$(document).ready(function() {
    
    $(".menu-btn").on("click", function() {
        $("nav").slideToggle(200);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass("fixed-header");
        } else {
            $('header').removeClass("fixed-header");
        }
    });

    function f_acc(){
        $('#accordeon .acc-body').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    }

    $(".why .acc-head").on("click", function(){
      $(".why .acc-head").removeClass("acc-minus");
      $(this).addClass("acc-minus");
    });

    $('#accordeon .acc-head').on('click', f_acc);
    
    $('.team-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});