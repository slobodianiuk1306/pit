$(document).ready(function () {
    $('.viewForSmallScreen').hide();
    $('.menu p').click(function () {
        if($('.viewForSmallScreen').css("display") == 'none'){
            $('.viewForSmallScreen').show("blind", "slow");
        }else{
            $('.viewForSmallScreen').hide("blind", {duration: "down"}, "slow");
        }
    });

});
