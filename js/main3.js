$(function () {

    $("#carousel").on('slide.bs.carousel', function(item){
        let $item = $(item.relatedTarget);
        let index = $item.index();
        let itemsInCarousel = 3;
        let allItems = $('.carousel-item').length;

        if(index >= allItems-(itemsInCarousel-1)) {
            let singleItem = itemsInCarousel - (allItems -index);
            for (let i = 0; i < singleItem; i++) {
                if (item.direction == 'left') {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                } else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner')
                }
            }
        }
    });

    $("#carousel").carousel({
        interval: 3000
    });


});