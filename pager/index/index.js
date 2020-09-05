window.onload = function () { //JS得入口函数

    $('#footer').load('../tabbar/tabbar.html');

    let oBtn = document.getElementsByClassName('btn')[0];
    let oSpan = document.getElementsByClassName('span');
    let wrapBox = document.getElementsByClassName('wrapBox')[0];
    let contentBox = document.getElementsByClassName('wrap_content_box')[0];
    let box1Content = document.getElementsByClassName('box1_content')[0];

    let btn_virtual = document.getElementById('btn_virtual');

    for (let i = 0; i < oSpan.length; i++) {
        oSpan[i].index = i
        oSpan[i].onclick = function () {
            for (let i = 0; i < oSpan.length; i++) {
                // oSpan[i].style.color = 'black'
                oSpan[i].style.opacity = '0.5'
            }

            wrapBox.style.left = -this.index * 100 + "%"
            contentBox.style.left = -this.index * 100 + "%"
            this.style.color = 'white'
            this.style.opacity = '1'
            // this  当点击谁  this就指代谁
        }
    }
    ajax('https://www.fastmock.site/mock/b79bdeab7d613f5e489b44c02ef1651d/IOTWeb/data',
        function (res) {
            let data = JSON.parse(res);
            for (let i = 0; i < data.length; i++) {
                let box = document.createElement('li');

                box.setAttribute('boxId', data[i].id);

                box.className = 'box1_content_type';
                box.innerHTML = `
                <div>
                    <div class="${data[i].titleIcon}"></div>${data[i].title}
                </div>
                `;
                box1Content.appendChild(box);
            }
        }, function (err) {

        }
    );

    box1Content.onclick = function(ev){        
        let target = ev.target||ev.srcElement;
        if(target.nodeName.toLowerCase()=='li'){
            let id = target.getAttribute('boxId')
            window.open('../public/public.html?'+id, '_self')
        }
    }
    btn_virtual.onclick = function(){
        window.open('../virtual/virtual.html', '_self')
    }
}