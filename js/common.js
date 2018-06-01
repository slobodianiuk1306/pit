'use strict';

$(document).ready(function () {
    //#region This is for quality for all screen.
    $('.imageOnAllScreen').hide();
    $('.imageQuality img').click(function (event) {
        $('.imageOnAllScreen').show();
        $('.imageOnAllScreen img').attr("src", $(event.target).attr("src"));
    });
    $('.imageOnAllScreen').click(function () {
        $('.imageOnAllScreen').hide();
    });
    //#endregion

    //#region This is for scroll action
    $('.menu').on('click', 'a', function (event) {
        event.preventDefault();
        // Take id like href
        var id = $(this).attr('href');
        // Try to know height from page to block
        var top = $(id).offset().top;
        // And animation:)
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    //#endregion

});