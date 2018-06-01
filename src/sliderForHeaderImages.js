$(document).ready(function () {
  setInterval(function () {
      switch ($('.sliderWithForm img:eq(0)').attr("src")){
          case "./img/slider/Layer%2046.png":
              $('.sliderWithForm img:eq(0)').animate({opacity: 0},function () {
                  $('.sliderWithForm img:eq(0)').attr("src", "./img/slider/Layer%2047.png");
                  $('.sliderWithForm img:eq(0)').animate({opacity: 1});
              });
              break;
          case "./img/slider/Layer%2047.png":
              $('.sliderWithForm img:eq(0)').animate({opacity: 0},function () {
                  $('.sliderWithForm img:eq(0)').attr("src", "./img/slider/Layer%2046.png");
                  $('.sliderWithForm img:eq(0)').animate({opacity: 1});
              });
              break;
          default:
              console.log("bad");
      }
  },3000);
    setInterval(function () {
        switch ($('.sliderWithForm img:eq(1)').attr("src")){
            case "./img/slider/Layer%2047.png":
                $('.sliderWithForm img:eq(1)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(1)').attr("src", "./img/slider/Layer%2048.png");
                    $('.sliderWithForm img:eq(1)').animate({opacity: 1});
                });
                break;
            case "./img/slider/Layer%2048.png":
                $('.sliderWithForm img:eq(1)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(1)').attr("src", "./img/slider/Layer%2047.png");
                    $('.sliderWithForm img:eq(1)').animate({opacity: 1});
                });
                break;
            default:
                console.log("bad");
        }
    },3900);
    setInterval(function () {
        switch ($('.sliderWithForm img:eq(2)').attr("src")){
            case "./img/slider/Layer%2048.png":
                $('.sliderWithForm img:eq(2)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(2)').attr("src", "./img/slider/Layer%2049.png");
                    $('.sliderWithForm img:eq(2)').animate({opacity: 1});
                });
                break;
            case "./img/slider/Layer%2049.png":
                $('.sliderWithForm img:eq(2)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(2)').attr("src", "./img/slider/Layer%2048.png");
                    $('.sliderWithForm img:eq(2)').animate({opacity: 1});
                });
                break;
            default:
                console.log("bad");
        }
    },4700);
    setInterval(function () {
        switch ($('.sliderWithForm img:eq(3)').attr("src")){
            case "./img/slider/Layer%2049.png":
                $('.sliderWithForm img:eq(3)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(3)').attr("src", "./img/slider/Layer%2053.png");
                    $('.sliderWithForm img:eq(3)').animate({opacity: 1});
                });
                break;
            case "./img/slider/Layer%2053.png":
                $('.sliderWithForm img:eq(3)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(3)').attr("src", "./img/slider/Layer%2049.png");
                    $('.sliderWithForm img:eq(3)').animate({opacity: 1});
                });
                break;
            default:
                console.log("bad");
        }
    },5500);
    setInterval(function () {
        switch ($('.sliderWithForm img:eq(4)').attr("src")){
            case "./img/slider/Layer%2053.png":
                $('.sliderWithForm img:eq(4)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(4)').attr("src", "./img/slider/Layer%2046.png");
                    $('.sliderWithForm img:eq(4)').animate({opacity: 1});
                });
                break;
            case "./img/slider/Layer%2046.png":
                $('.sliderWithForm img:eq(4)').animate({opacity: 0},function () {
                    $('.sliderWithForm img:eq(4)').attr("src", "./img/slider/Layer%2053.png");
                    $('.sliderWithForm img:eq(4)').animate({opacity: 1});
                });
                break;
            default:
                console.log("bad");
        }
    },6800);
});
