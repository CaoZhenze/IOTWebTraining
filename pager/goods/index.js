


// 获取url参数
function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let lets = query.split("&");
    for (let i = 0; i < lets.length; i++) {
        let pair = lets[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

let swiper_wrapper = document.getElementById('swiper-wrapper');
let goods_pic = document.getElementById('goods_pic');
let btn_back = document.getElementById('btn_back');
let goods_info = document.getElementById('goods_info');

let goods_id = getQueryVariable('goods_id');
let url = 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=' + goods_id

ajax(url, function (res) {
    let { message } = JSON.parse(res)
    console.log(message);

    for (let i = 0; i < message.pics.length; i++) {
        let box = document.createElement('div');
        box.className = 'swiper-slide'
        box.innerHTML = `
        <img src="${message.pics[i].pics_big}" alt="">
    `;
        swiper_wrapper.appendChild(box);
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

    let box1 = document.createElement('div');
    box1.innerHTML = `
    <div class="goods_price">￥${message.goods_price}</div>
    <div class="goods_name_info">
        <div class="goods_name">${message.goods_name}</div>
        <span class="iconfont icon-fenxiang"></span>
    </div>
    `;
    goods_info.appendChild(box1);

    let box = document.createElement('div');
    box.innerHTML = message.goods_introduce
    goods_pic.appendChild(box);

});


btn_back.onclick = function(){
    window.history.go(-1);
}