


let btn_back = document.getElementById('btn_back');
let content = document.getElementById('content');

let data = {

}


let url = 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search'
let query = window.location.search.substring(1);
let vars = query.split("&");
if (vars.length > 0) {
    url += '?' + query
}
//
ajax(url, function (res) {
    let { message } = JSON.parse(res);
    this.data = message.goods;
    console.log(this.data);
    for (let i = 0; i < this.data.length; i++) {
        let box = document.createElement('div');
        box.className = 'goods_warp'
        box.setAttribute('goods_id', this.data[i].goods_id);
        box.setAttribute('index', i);
        box.setAttribute('onclick', 'clickGoods('+this.data[i].goods_id+')')
        box.innerHTML = `
        <img src="${this.data[i].goods_small_logo}" alt="">
        <div class="goods_info">
            <div class="goods_introduce">${this.data[i].goods_name}</div>
            <div class="goods_price">${this.data[i].goods_price}￥</div>
        </div>
    `;
        content.appendChild(box);
    }
});

btn_back.onclick = function () {
    window.history.go(-1);
}

function clickGoods(goods_id){
    window.open('../goods/index.html?goods_id='+goods_id, '_self')
}