'use strict';

var a = document.referrer;

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    centerMode:true,
	centerPadding:"20%",
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow:1,
                centerMode:true,
                centerPadding:'11%'
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow:1,
                centerMode:true,
                centerPadding:'0%'
            }
        }
    ]
});

if(a!="show_forpc.html"){
    $('.line').animate(
        {'width':'100%'},//伸び
        1500,//秒数
        function(){
            $('.line').css('right',0)//向き変更
            $('.line').animate({'width':'0%'},function(){
                $('.up').animate({'height':'0%'});
                $('.down').animate({'height':'0%'});
            });//縮み
        }
    );
}else{//特定のURL（各showページ）から遷移した場合の分岐
    document.getElementsByClassName('up').style.height = "0%";
    document.getElementsByClassName('up').style.width = "0%";
}
