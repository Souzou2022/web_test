'use strict';

document.getElementById("submit_button").addEventListener("click",
    function(){
        //console.log("dont touch me");
        let FileNameElement = document.getElementById("namelabel");
        let UserNameElement = document.getElementById("maillabel");
        //console.log(FileNameElement.value + ':' + UserNameElement.value);

        var JsonObj = {
            "pictures":[
                {"photographer":"krsz♪","img":"krszbaby♪.jpg"}
            ]
        };
        $.getJSON("ImgList.json",function(Obj){//jsonのロード:localhostや本番環境でないと可動しない(サーバーの動作が必須)
            JsonObj = Obj;
            console.log(JsonObj);
            var number_of_pic = Object.keys(JsonObj["pictures"]).length;
            console.log(number_of_pic);

            var new_data = {"photographer":UserNameElement.value,"img":FileNameElement.value};
            JsonObj["pictures"].push(new_data);
            console.log(JsonObj);
        })

        var jsonData = JSON.stringify(JsonObj);
        const link = document.createElement("a");
        link.href = "data:text/plain," + encodeURIComponent(jsonData);
        a.download = "ImgList.json";
        a.click();
    }
);

