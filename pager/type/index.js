ajax('https://api-hmugo-web.itheima.net/api/public/v1/categories', 
function(res){
    let {message} = JSON.parse(res);
    console.log(message);
});
