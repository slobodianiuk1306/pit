$(document).ready(function () {
    for(let i = 0; i < imagesOfCustomers.length; i++){
        $('.logoCustomers').prepend('<img src="" />');
        $('.logoCustomers img:first-child').attr("src", imagesOfCustomers[i].imageURL);
        $('.nameOfCustomers h2:first-child').attr("src",imagesOfCustomers[i].imageURL);
        $('.nameOfCustomers h2:first-child').css({background: "url('./img/Rectangle.png')", backgroundPosition: "bottom",
            backgroundRepeat:"no-repeat"})
    }
    $('.nameOfCustomers h2').click(function (event) {

        if($(window).width() > 700) {
            if ($('.nameOfCustomers h2').has({background: "url('./img/Rectangle.png')"})) {
                $('.nameOfCustomers h2').removeAttr("style", "background");
                imagesSetting();
                $(event.target).css({
                    background: "url('./img/Rectangle.png')", backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat"
                });
            }
            else {
                $(event.target).css({
                    background: "url('./img/Rectangle.png')", backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat"
                });
            }
        }
    });
});
