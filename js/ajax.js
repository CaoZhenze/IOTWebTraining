function ajax(url, fnSucc, fnFaild) {
//1.创建Ajax对象
	// IE6的ajax对象与其他浏览器不同
	if (window.XMLHttpRequest) {
		var oAjax = new XMLHttpRequest(); //主流浏览器
	} else {
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP"); //针对于IE6
	}
    
//2.连接服务器（打开和服务器的连接）
	oAjax.open('GET', url, true); // 请求方式   资源路径   异步
	// get post是最常用的请求方式
	// delete,copy、head、link


//3.发送
	oAjax.send();


//4.接收
	oAjax.onreadystatechange = function () {
		if (oAjax.readyState == 4) {
			if (oAjax.status == 200) {
				fnSucc(oAjax.responseText);
			} else {
				if (fnFaild) {
					fnFaild();
					console.log(oAjax.status)
				}
			}
		}
	};
}