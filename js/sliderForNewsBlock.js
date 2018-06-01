"use strict";

$(document).ready(function () {
    var images = [{
        imageSRC: "./img/news/1DSM6216.png"
    }, {
        imageSRC: "./img/news/1DSM6252.png"
    }, {
        imageSRC: "./img/news/1DSM6279.png"
    }, {
        imageSRC: "./img/news/Layer37.png"
    }];
    var numberOfImage = 0;
    var numberOfImageProducts = 0;
    $('.insideSlideNews:eq(0) a').click(function (event) {
        switch ($(event.target).text()) {
            case "▲":
                if (numberOfImage < images.length) {
                    $('.insideSlideNews:eq(0) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(0) img').attr("src", images[numberOfImage - 1].imageSRC);
                    });

                    $('.insideSlideNews:eq(0) img').animate({ opacity: 1 });
                    numberOfImage++;
                } else {
                    numberOfImage = 0;
                    $('.insideSlideNews:eq(0) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(0) img').attr("src", images[numberOfImage].imageSRC);
                        numberOfImage++;
                    });
                    $('.insideSlideNews:eq(0) img').animate({ opacity: 1 });
                }
                break;
            case "▼":
                if (numberOfImage < images.length && numberOfImage != 0) {

                    $('.insideSlideNews:eq(0) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(0) img').attr("src", images[numberOfImage].imageSRC);
                    });

                    $('.insideSlideNews:eq(0) img').animate({ opacity: 1 });
                    numberOfImage--;
                } else {
                    numberOfImage = images.length;
                    $('.insideSlideNews:eq(0) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(0) img').attr("src", images[numberOfImage - 1].imageSRC);
                        numberOfImage--;
                    });
                    $('.insideSlideNews:eq(0) img').animate({ opacity: 1 });
                }
                break;
            default:
                break;

        }
    });

    $('.insideSlideNews:eq(1) a').click(function (event) {
        switch ($(event.target).text()) {
            case "▲":
                if (numberOfImageProducts < images.length) {
                    $('.insideSlideNews:eq(1) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(1) img').attr("src", images[numberOfImageProducts - 1].imageSRC);
                    });

                    $('.insideSlideNews:eq(1) img').animate({ opacity: 1 });
                    numberOfImageProducts++;
                } else {
                    numberOfImageProducts = 0;
                    $('.insideSlideNews:eq(1) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(1) img').attr("src", images[numberOfImageProducts].imageSRC);
                        numberOfImageProducts++;
                    });
                    $('.insideSlideNews:eq(1) img').animate({ opacity: 1 });
                }
                break;
            case "▼":
                if (numberOfImageProducts < images.length && numberOfImageProducts != 0) {

                    $('.insideSlideNews:eq(1) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(1) img').attr("src", images[numberOfImageProducts].imageSRC);
                    });

                    $('.insideSlideNews:eq(1) img').animate({ opacity: 1 });
                    numberOfImageProducts--;
                } else {
                    numberOfImageProducts = images.length;
                    $('.insideSlideNews:eq(1) img').animate({ opacity: 0 }, function () {
                        $('.insideSlideNews:eq(1) img').attr("src", images[numberOfImageProducts - 1].imageSRC);
                        numberOfImageProducts--;
                    });
                    $('.insideSlideNews:eq(1) img').animate({ opacity: 1 });
                }
                break;
            default:
                break;

        }
    });
});