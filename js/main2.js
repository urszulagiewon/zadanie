$(function(){
$(".next").on("click", function(){
    $(".item:first").insertAfter(".item:last");
});
$(".prev").on("click", function(){
    $(".item:last").insertBefore($(".item:first"));
});
});