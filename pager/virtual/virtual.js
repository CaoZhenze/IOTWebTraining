
let content_box = document.getElementById('content_box');
let btn_back = document.getElementById('btn_back');


ajax('https://www.fastmock.site/mock/253a8dd14d7c793e235517a5390a815b/Txj/212',
    function (res) {
        let data = JSON.parse(res);
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li')
            li.setAttribute('boxId', data[i].id)
            li.setAttribute('onclick', 'clickChoose('+data[i].id+')')
            li.innerHTML = `
            <strong>${data[i].title}</strong>
            <i>虚拟体验</i>
            <img src="${data[i].img}" alt="">
        `
            content_box.appendChild(li)
        }
    });

function clickChoose(id){
    if (id == 0) {
        window.open('../airConditioner/airConditioner.html', '_self')
    } else if (id == 1) {
        window.open('../Humi/humi.html', '_self')
    } else if (id == 2) {
        window.open('../water/', '_self')
    }
}

btn_back.onclick = function () {
    window.history.go(-1);
}
