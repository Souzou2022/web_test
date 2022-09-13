'use strict';

let requestURL = "G:\第三期想像工学\assets\js\json\show_childRoom.json";//jsonのロードだが、どう実装する
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const superHeroes = request.response;

    console.log(superHeroes);
}


document.getElementById("picture_box_1").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_1");
    }
);

document.getElementById("picture_box_2").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_2");
    }
);

document.getElementById("picture_box_3").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_3");
    }
);

document.getElementById("picture_box_4").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_4");
    }
);

document.getElementById("picture_box_5").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_5");
    }
);

document.getElementById("picture_box_6").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_6");
    }
);

document.getElementById("picture_box_7").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_7");
    }
);

document.getElementById("picture_box_8").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_8");
    }
);

document.getElementById("picture_box_9").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_9");
    }
);

document.getElementById("picture_box_10").addEventListener("click",
    function(){
        pictureboxClickEvent("picture_box_10");
    }
);

function pictureboxClickEvent(name_of_id){
    //console.log("クリックされたお:" + name_of_id);
    var objA = document.getElementById('map');
    var objB = document.createElement('div');
    objB.className = "map_plate";
    objB.id = "map_plate_id"
    objA.appendChild(objB);

    var objC = document.createElement('div');
    objC.className = "map_plate_back";
    objC.id = "map_plate_back_id";
    objC.onclick = function(){
        mapDisprayDelete("map_plate_id","map_plate_back_id","map_plate_img_id");
    }
    objA.appendChild(objC);

    var objD = document.createElement('img');
    objD.className = "map_plate_img";
    objD.id = "map_plate_img_id";
    objD.style.zIndex = 10;
    var str = name_of_id;
    var str = str.slice(12);
    str = parseInt(str,10);//クリックされた画像が何枚目かを示す。
    objD.src = "./assets/img/" + "img3_1.jpg";
    objA.appendChild(objD);
    //console.log(str+1);
}

function mapDisprayDelete(name_of_id1,name_of_id2,name_of_id3){
    document.getElementById(name_of_id1).remove();
    document.getElementById(name_of_id2).remove();
    document.getElementById(name_of_id3).remove();
    //console.log("アホ氏ね:" + name_of_id);
}
