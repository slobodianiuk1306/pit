"use strict";

var imagesOfCustomers = [{
    imageURL: "./img/logoCustomers/Layer26.png"
}, {
    imageURL: "./img/logoCustomers/Layer27.png"
}, {
    imageURL: "./img/logoCustomers/Layer28.png"
}, {
    imageURL: "./img/logoCustomers/Layer29.png"
}, {
    imageURL: "./img/logoCustomers/Layer30.png"
}, {
    imageURL: "./img/logoCustomers/Layer31.png"
}];

function imagesSetting() {
    $('.logoCustomers img').remove();
    for (var i = 0; i < imagesOfCustomers.length; i++) {
        $('.logoCustomers').prepend('<img src="" />');
        $('.logoCustomers img:first-child').attr("src", imagesOfCustomers[i].imageURL);
    }
}

// function imagesSettingForMobileVersion(numOfBlock) {
//     $('.logoCustomersForMobileVersion img').remove();
//     for(let i = 0; i < imagesOfCustomers.length; i++){
//         $('.logoCustomersForMobileVersion:eq(num)').prepend('<img src="" />');
//         $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
//     }
// }