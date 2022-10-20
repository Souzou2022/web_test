$("button").click(function(){
    let requestURL = "ImgList.json";//jsonのロードだが、どう実装する
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const superHeroes = request.response;

        console.log(superHeroes);
    }
})
