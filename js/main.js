$(function() {
$('.slider').slick({
    fade: true,
    autoplay: 3000,
    arrows: false,
    dots:true
});

$('.header-btn').on('click', function(){
$('.menu').addClass('active');
});

$('.close-btn').on('click', function() {
$('.menu').removeClass('active');

});

});

