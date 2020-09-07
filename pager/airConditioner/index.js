let iconback = document.getElementById('iconback');
iconback.onclick = function(){
    window.history.go(-1);
}

let temp = document.getElementById('temp');

function add(){
    let temp_num = temp.innerHTML;
    temp_num = temp_num.split('℃')[0];
    temp_num = Number.parseInt(temp_num)+1;
    temp.innerHTML = temp_num+'℃';
}
function sub(){
    let temp_num = temp.innerHTML;
    temp_num = temp_num.split('℃')[0];
    temp_num = Number.parseInt(temp_num)-1;
    temp.innerHTML = temp_num+'℃';
}