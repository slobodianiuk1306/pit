'use strict';

$(document).ready(function () {
    //#region This is for detect window size
    if ($(window).width() < 700) {
        $('.logoCustomers').hide();
        $('.logoCustomersForMobileVersion').show();
        $('#ourCustomers .ourCustomers .nameOfCustomers h2').click(function (event) {
            switch ($(event.target).text().replace(/\s/g, '')) {
                case "Машиностроительныепредприятия":

                    $('.logoCustomersForMobileVersion img').remove();
                    for (var i = 0; i < imagesOfCustomers.length; i++) {
                        $('.logoCustomersForMobileVersion:eq(0)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                    }

                    break;
                case "Производителипишевойпродукции":

                    $('.logoCustomersForMobileVersion img').remove();
                    for (var _i = 0; _i < imagesOfCustomers.length; _i++) {
                        $('.logoCustomersForMobileVersion:eq(1)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[_i].imageURL);
                    }

                    break;
                case "предприятияспециальногомашиностроения":

                    $('.logoCustomersForMobileVersion img').remove();
                    for (var _i2 = 0; _i2 < imagesOfCustomers.length; _i2++) {
                        $('.logoCustomersForMobileVersion:eq(2)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[_i2].imageURL);
                    }

                    break;
                case "Оборонныепредприятия":

                    $('.logoCustomersForMobileVersion img').remove();
                    for (var _i3 = 0; _i3 < imagesOfCustomers.length; _i3++) {
                        $('.logoCustomersForMobileVersion:eq(3)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[_i3].imageURL);
                    }
                    break;

                default:
                    console.log($(event.target).text().replace(/\s/g, ''));
                    break;
            }
        });
    } else {
        $('.logoCustomers').show();
        $('.logoCustomersForMobileVersion').hide();
    }

    $(window).resize(function () {
        if ($(window).width() < 700) {
            $('#ourCustomers .ourCustomers .nameOfCustomers h2').click(function (event) {
                switch ($(event.target).text().replace(/\s/g, '')) {
                    case "Машиностроительныепредприятия":

                        $('.logoCustomersForMobileVersion img').remove();
                        for (var i = 0; i < imagesOfCustomers.length; i++) {
                            $('.logoCustomersForMobileVersion:eq(0)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                        }

                        break;
                    case "Производителипишевойпродукции":

                        $('.logoCustomersForMobileVersion img').remove();
                        for (var _i4 = 0; _i4 < imagesOfCustomers.length; _i4++) {
                            $('.logoCustomersForMobileVersion:eq(1)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[_i4].imageURL);
                        }

                        break;
                    case "предприятияспециальногомашиностроения":

                        $('.logoCustomersForMobileVersion img').remove();
                        for (var _i5 = 0; _i5 < imagesOfCustomers.length; _i5++) {
                            $('.logoCustomersForMobileVersion:eq(2)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[_i5].imageURL);
                        }

                        break;
                    case "Оборонныепредприятия":

                        $('.logoCustomersForMobileVersion img').remove();
                        for (var _i6 = 0; _i6 < imagesOfCustomers.length; _i6++) {
                            $('.logoCustomersForMobileVersion:eq(3)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[_i6].imageURL);
                        }
                        break;

                    default:
                        console.log($(event.target).text().replace(/\s/g, ''));
                        break;
                }
            });
            $('.logoCustomers').hide();
            $('.logoCustomersForMobileVersion').show();
        } else {
            $('.logoCustomers').show();
            $('.logoCustomersForMobileVersion').hide();
        }
    });
    //#endregion
});