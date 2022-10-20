'use strict';

//let requestURL = "ImgList.json";//jsonのロード:localhostや本番環境でないと可動しない(サーバーの動作が必須)
//let request = new XMLHttpRequest();
//request.open('GET', requestURL);
//request.responseType = 'json';
//request.send();
//request.onload = function() {
//    const superHeroes = request.response;

//    console.log(superHeroes);}

var JsonObj = {
    "pictures":[
        {"photographer":"krsz","img":"krszbaby"}
    ]
};
$.getJSON("ImgList.json",function(Obj){//jsonのロード:localhostや本番環境でないと可動しない(サーバーの動作が必須)
    JsonObj = Obj;
    console.log(JsonObj);
    var number_of_pic = Object.keys(JsonObj["pictures"]).length;
    console.log(number_of_pic);
    for(let i = 0; i < number_of_pic; i=i+2){
        var ArtObjA = document.getElementById('article_box_id');
        var ArtObjCreB = document.createElement('div');
        ArtObjCreB.className = "article";
        ArtObjCreB.id = 'article'+i+1;
        ArtObjA.appendChild(ArtObjCreB);

        var SecObjA = document.getElementById('article'+i+1);
        var SecObjCreB = document.createElement('section');
        SecObjCreB.className = "section picture_list1";
        SecObjCreB.id = 'section'+i+1;
        SecObjA.appendChild(SecObjCreB);

        var UlObjA = document.getElementById('section'+i+1);
        var UlObjB = document.createElement('ul');
        UlObjB.className = 'grid grid-col-2 card_position';
        UlObjB.id = 'ul'+i+1;
        UlObjA.appendChild(UlObjB);


        var LiObjA = document.getElementById('ul'+i+1);
        var LiObjB = document.createElement('li');
        LiObjB.className = "grid_item";
        LiObjB.id = 'Li'+i+1;
        LiObjA.appendChild(LiObjB);
        
        var ArtObjC = document.getElementById('Li'+i+1);
        var ArtObjD = document.createElement('article');
        ArtObjD.className = 'cards1 card'+i+1;
        ArtObjD.id = 'under_article'+i+1;
        ArtObjC.appendChild(ArtObjD);

        var DIAObjA = document.getElementById('under_article'+i+1);
        var DObjB = document.createElement('div');
        DObjB.className = 'card_plate card_plate_propaty1';
        DIAObjA.appendChild(DObjB);
        var ImgObjC = document.createElement('img');
        ImgObjC.src = './assets/img/'+JsonObj["pictures"][i]['img'];
        ImgObjC.alt = "picture";
        ImgObjC.width = "480px";
        ImgObjC.height = "270px";
        ImgObjC.className = "picture_body";
        ImgObjC.id = "picture_box_"+i+1;
        DIAObjA.appendChild(ImgObjC);
        var AhObjD = document.createElement('a');
        AhObjD.href = "./assets/img/"+JsonObj["pictures"][i]['img'];
        AhObjD.download = JsonObj["pictures"][i]['img'];
        AhObjD.id = "download"+i+1;
        DIAObjA.appendChild(AhObjD);

        var DlImgA = document.getElementById("download"+i+1);
        var DlImgB = document.createElement('img');
        DlImgB.src = "./assets/img/downroad.png";
        DlImgB.alt = "download";
        DlImgB.className = "download_button";
        DlImgA.appendChild(DlImgB);

        
        LiObjA = document.getElementById('ul'+i+1);
        LiObjB = document.createElement('li');
        LiObjB.className = "grid_item";
        LiObjB.id = 'Li'+i+2;
        LiObjA.appendChild(LiObjB);
        
        ArtObjC = document.getElementById('Li'+i+2);
        ArtObjD = document.createElement('article');
        ArtObjD.className = 'cards2 card'+i+2;
        ArtObjD.id = 'under_article'+i+2;
        ArtObjC.appendChild(ArtObjD);

        DIAObjA = document.getElementById('under_article'+i+2);
        DObjB = document.createElement('div');
        DObjB.className = 'card_plate card_plate_propaty2';
        DIAObjA.appendChild(DObjB);
        ImgObjC = document.createElement('img');
        ImgObjC.src = './assets/img/'+JsonObj["pictures"][i]['img'];
        ImgObjC.alt = "picture";
        ImgObjC.width = "480px";
        ImgObjC.height = "270px";
        ImgObjC.className = "picture_body";
        ImgObjC.id = "picture_box_"+i+2;
        DIAObjA.appendChild(ImgObjC);
        AhObjD = document.createElement('a');
        AhObjD.href = "./assets/img/"+JsonObj["pictures"][i]['img'];
        AhObjD.download = JsonObj["pictures"][i]['img'];
        AhObjD.id = "download"+i+2;
        DIAObjA.appendChild(AhObjD);

        DlImgA = document.getElementById("download"+i+2);
        DlImgB = document.createElement('img');
        DlImgB.src = "./assets/img/downroad.png";
        DlImgB.alt = "download";
        DlImgB.className = "download_button";
        DlImgA.appendChild(DlImgB);


        console.log(i);
        console.log(JsonObj['pictures'][i]['img']);
    }
})