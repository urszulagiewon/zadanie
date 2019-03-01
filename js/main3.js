$(function () {

    function moveLeft() {
        $('.item').each(function () {
            $('.item').animate({
                'margin-left': "-=340",
                'margin-right': '+=340'
            }, 1000);
        })
    };

    function moveRight() {
        $('.item').each(function () {
            $('.item').animate({
                'margin-right': '-=340',
                'margin-left': '+=340'
            }, 1000);
        })
    }



    $(".left").on('click', function () {
        moveLeft($('.item').eq(0));
    });

    $('.right').on('click', function () {
        moveRight($('.item:last'));
    });



});