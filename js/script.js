$(function(){
    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover:false,
      });
      //about-slider
      $('.about-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        pauseOnHover:true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
      //counert-up part
      $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });
    //team-slider
    $('.team-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      pauseOnHover:true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
    });
    //comment-slider
    $('.comment-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: ".left",
      nextArrow: ".right",
      pauseOnHover:false,
    });

    ///back-to-top
    $(".back-to-top").click(function(){
      $("html,body").animate({ scrollTop: 0}, 1000)
    })

    ////scroll
    $(window).scroll(function(){
      var top = $(this).scrollTop() 
      if (top > 300){
        $(".navbar").addClass("sticky-menu")
      } 
      else{
        $(".navbar").removeClass("sticky-menu")
      }
      ///back-to-top
     if (top >400){
       $(".back-to-top").fadeIn(300)
     }
     else{
      $(".back-to-top").fadeOut(300)
     }
  
    })

    ////venobox
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'plane',  
  })

  new VenoBox({
    selector: '.my-video-links',
  })
})