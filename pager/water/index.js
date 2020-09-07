
let btn_back = document.getElementsByClassName('btn_back')[0];
let device_temp = document.getElementById('device_temp');
let header = document.getElementsByClassName('header')[0];

let color = ['#F3B73F', '#1E90FF', '#FF0000', '#FFC0CB', '#00FF00', '#9400D3']

btn_back.onclick = function () {
    window.history.go(-1);
}

function btn_sub(){
    let temp = device_temp.innerHTML;
    temp = Number.parseInt(temp)-1;
    device_temp.innerHTML = temp;
}

function btn_add(){
    let temp = device_temp.innerHTML;
    temp = Number.parseInt(temp)+1;
    device_temp.innerHTML = temp;
}

function change_state(index){
    header.style.background = color[index];
}