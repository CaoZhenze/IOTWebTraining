
$('#footer').load('../tabbar/tabbar.html');


let swiper_wrapper = document.getElementsByClassName('swiper-wrapper')[0];
let navg = document.getElementById('navg');
let hot_shop = document.getElementById('hot_shop');


ajax('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    function (res) {
        let { message } = JSON.parse(res);
        for (let i = 0; i < message.length; i++) {
            let box = document.createElement('div');
            box.className = 'swiper-slide';
            box.innerHTML = `
            <img src="${message[i].image_src}" alt="">
            `
            swiper_wrapper.appendChild(box)
        }
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
    });

ajax('https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
    function (res) {
        let { message } = JSON.parse(res);
        for (let i = 0; i < message.length; i++) {
            let box = document.createElement('li');
            box.innerHTML = `
            <img src="${message[i].image_src}" alt="">
            `
            navg.appendChild(box)
        }
    });


ajax('https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
    function (res) {
        let { message } = JSON.parse(res);
        console.log(message);
        for (let i = 0; i < message.length; i++) {
            let box = document.createElement('div');
            box.className = 'hot_content'
            box.innerHTML = `
            <div class="title">${message[i].floor_title.name}</div>
            <ul>
                <li><img class="big_img" src="${message[i].product_list[0].image_src}" alt=""></li>
                <li><img src="${message[i].product_list[1].image_src}" alt=""></li>
                <li><img src="${message[i].product_list[2].image_src}" alt=""></li>
                <li><img src="${message[i].product_list[3].image_src}" alt=""></li>
                <li><img src="${message[i].product_list[4].image_src}" alt=""></li>
            </ul>
            `
            hot_shop.appendChild(box)
        }
    });


navg.onclick = function () {
    window.open('../type/', '_self')
}