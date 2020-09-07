


let btn_back = document.getElementById('btn_back');

let data = {

}
let pageNum = 0;


let url = 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search'
let query = window.location.search.substring(1);
let vars = query.split("&");
if (vars.length > 0) {
    url += '?' + query
}
//
ajax(url, function (res) {
    let { message } = JSON.parse(res);
    this.pageNum = message.pagenum;
    this.data = message.goods;
    let content = document.getElementById('content');
    content.innerHTML = '';
    show(this.data)
});

function show(data) {

    for (let i = 0; i < data.length; i++) {
        let box = document.createElement('div');
        box.className = 'goods_warp'
        box.setAttribute('goods_id', data[i].goods_id);
        box.setAttribute('index', i);
        box.setAttribute('onclick', 'clickGoods(' + data[i].goods_id + ')')
        box.innerHTML = `
        <img src="${data[i].goods_small_logo}" alt="">
        <div class="goods_info">
            <div class="goods_introduce">${data[i].goods_name}</div>
            <div class="goods_price">￥${data[i].goods_price}</div>
        </div>
    `;
        content.appendChild(box);
    }
}

btn_back.onclick = function () {
    window.history.go(-1);
}

function clickGoods(goods_id) {
    window.open('../goods/index.html?goods_id=' + goods_id, '_self')
}

let search = document.getElementById('search');
search.onkeydown = function (event) {
    var code = event.keyCode;
    if (code == 13) { //这是键盘的enter监听事件
        let oUrl = document.location.toString();
        oUrl = oUrl.split("?")[0];
        console.log(oUrl);
        window.location.replace(oUrl+"?query="+search.value+"&pagenum=1");
    }
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

let ajaxNum = 0;

// 动态加载
window.addEventListener('scroll', function () {
    let bottom_height = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
    if (bottom_height < 600) {
        let oUrl = document.location.toString();
        oUrl = oUrl.split("?")[1];
        oUrl = oUrl.split("pagenum")[0];
        oUrl += 'pagenum='+(Number.parseInt(this.pageNum)+1)
        oUrl = 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?' + oUrl
        if(ajaxNum <= 0){
            ajaxNum++;
            ajax(oUrl, function(res){
                let {message} = JSON.parse(res);
                this.data = this.data.concat(message.goods);
                this.pageNum = message.pagenum
                show(message.goods)
                ajaxNum--
            });
        }
    }
})