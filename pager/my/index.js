
$('#footer').load('../tabbar/tabbar.html')

var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});