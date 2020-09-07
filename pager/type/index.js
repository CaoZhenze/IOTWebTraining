
let data = {

}

let leftMenu = document.getElementById('left');
let rightMenu = document.getElementById('right');
let btn_back = document.getElementById('btn_back');

ajax('https://api-hmugo-web.itheima.net/api/public/v1/categories',
    (res) => {
        let { message } = JSON.parse(res);
        this.data = message;
        console.log(this.data);
        for (let i = 0; i < message.length; i++) {
            let box = document.createElement('li');
            box.setAttribute('cat_id', message[i].cat_id);
            box.setAttribute('index', i);
            box.innerHTML = `
        ${message[i].cat_name}
        `;
            leftMenu.appendChild(box);
        }
    });

leftMenu.onclick = (ev) => {
    let target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == 'li') {
        leftMenu.childNodes.forEach(element => {
            element.className = ''
        });
        target.className = 'active';
        let cat_id = target.getAttribute('cat_id')
        let index = target.getAttribute('index');
        this.showRight(index);
    }
}


function showRight(index) {
    rightMenu.innerHTML = ''
    let childrenList = this.data[index].children;
    for (let i = 0; i < childrenList.length; i++) {
        let box = document.createElement('li');
        box.setAttribute('cat_id', childrenList[i].cat_id);
        box.setAttribute('index', i);
        let children = childrenList[i].children;
        let content_info = '';
        children.forEach(element => {
            content_info += `
            <li onclick="itemClick(${element.cat_id})" index=${element.cat_id}>
                <img src="${element.cat_icon}" alt="">
                <p>${element.cat_name}</p>
            </li>
            `
        });
        box.innerHTML = `
        <div class="title">${childrenList[i].cat_name}</div>
        <div class="content_info">
        ${content_info}
        </div>
        `;
        rightMenu.appendChild(box);
    }
}

function itemClick(cat_id){
    window.open('../list/index.html?cid='+cat_id+'&pagenum=1', '_self')
}

btn_back.onclick = function(){
    window.history.go(-1);
}

let search = document.getElementById('search');
search.onkeydown = function (event) {
    var code = event.keyCode;
    if (code == 13) { //这是键盘的enter监听事件
        window.open('../list/index.html?query='+search.value+'&pagenum=1', '_self');
    }
}