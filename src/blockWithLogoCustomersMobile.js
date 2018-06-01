$(document).ready(function () {
    //#region This is for detect window size
    if ($(window).width() < 700){
        $('.logoCustomers').hide();
        $('.logoCustomersForMobileVersion').show();
        $('#ourCustomers .ourCustomers .nameOfCustomers h2').click(function (event) {
            switch ($(event.target).text().replace(/\s/g,'')){
                case "Машиностроительныепредприятия":

                    $('.logoCustomersForMobileVersion img').remove();
                    for(let i = 0; i < imagesOfCustomers.length; i++){
                        $('.logoCustomersForMobileVersion:eq(0)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                    }

                    break;
                case "Производителипишевойпродукции":

                    $('.logoCustomersForMobileVersion img').remove();
                    for(let i = 0; i < imagesOfCustomers.length; i++){
                        $('.logoCustomersForMobileVersion:eq(1)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                    }

                    break;
                case "предприятияспециальногомашиностроения":

                    $('.logoCustomersForMobileVersion img').remove();
                    for(let i = 0; i < imagesOfCustomers.length; i++){
                        $('.logoCustomersForMobileVersion:eq(2)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                    }

                    break;
                case "Оборонныепредприятия":

                    $('.logoCustomersForMobileVersion img').remove();
                    for(let i = 0; i < imagesOfCustomers.length; i++){
                        $('.logoCustomersForMobileVersion:eq(3)').prepend('<img src="" />');
                        $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                    }
                    break;

                default:
                    console.log($(event.target).text().replace(/\s/g,''));
                    break;
            }
        });

    }else {
        $('.logoCustomers').show();
        $('.logoCustomersForMobileVersion').hide();
    }

    $(window).resize(function () {
        if ($(window).width() < 700){
            $('#ourCustomers .ourCustomers .nameOfCustomers h2').click(function (event) {
                switch ($(event.target).text().replace(/\s/g,'')){
                    case "Машиностроительныепредприятия":

                        $('.logoCustomersForMobileVersion img').remove();
                        for(let i = 0; i < imagesOfCustomers.length; i++){
                            $('.logoCustomersForMobileVersion:eq(0)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                        }

                        break;
                    case "Производителипишевойпродукции":

                        $('.logoCustomersForMobileVersion img').remove();
                        for(let i = 0; i < imagesOfCustomers.length; i++){
                            $('.logoCustomersForMobileVersion:eq(1)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                        }

                        break;
                    case "предприятияспециальногомашиностроения":

                        $('.logoCustomersForMobileVersion img').remove();
                        for(let i = 0; i < imagesOfCustomers.length; i++){
                            $('.logoCustomersForMobileVersion:eq(2)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                        }

                        break;
                    case "Оборонныепредприятия":

                        $('.logoCustomersForMobileVersion img').remove();
                        for(let i = 0; i < imagesOfCustomers.length; i++){
                            $('.logoCustomersForMobileVersion:eq(3)').prepend('<img src="" />');
                            $('.logoCustomersForMobileVersion img:first-child').attr("src", imagesOfCustomers[i].imageURL);
                        }
                        break;

                    default:
                        console.log($(event.target).text().replace(/\s/g,''));
                        break;
                }
            });
            $('.logoCustomers').hide();
            $('.logoCustomersForMobileVersion').show();
        }
        else {
            $('.logoCustomers').show();
            $('.logoCustomersForMobileVersion').hide();
        }
    });
    //#endregion
});
