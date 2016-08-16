//rem响应式布局调试屏幕宽度不一样的
~function(desW){
    var winW=document.documentElement.clientWidth,
        oMain=document.getElementById('main'),
        n=winW/desW;
    if(winW>desW){
        oMain.style.width=desW+'px';
        return;
    }
    document.documentElement.style.fontSize=n*100+'px';
}(640);
//Swiper
var sw=new Swiper('.swiper-container',{
    loop:true,//实现无缝滚动
    direction:'vertical',
    pagination : '.swiper-pagination',//翻页
    paginationType:'fraction',//为分布式
    //scrollbar: '.swiper-scrollbar',//滚动条
    //scrollbarHide:false,//滚动条不会自动隐藏

    onSlideChangeEnd:function(swiper){
        var slideAry=swiper.slides,
            trueNum=slideAry.length- 2,
            lastIn=trueNum+1;
        var curIn=swiper.activeIndex;
        [].forEach.call(slideAry,function(item,index){
            if(index===curIn){
                switch (curIn){
                    case 0:
                        item.id='page'+trueNum;
                        break;
                    case lastIn:
                        item.id='page1';
                        break;
                    default :
                        item.id='page'+curIn;
                        break;
                }
               return;
            }
            item.id=null;
        });
    }
});
//音乐部分

~function(){
    var music=document.getElementById('music'),
        audio=document.getElementById('audio');
    music.addEventListener('click',function(){
        if(audio.paused){//说明当前是暂停的
            audio.play();
            music.className='music move';
            return;
        }
        audio.pause();
        music.className='music';
    },false);
    window.setTimeout(function(){
        audio.play();//让它播放
        audio.addEventListener('canplay',function(){//canplay 说明它已经出声了
            music.style.display='block';
            music.className='music move';
        },false);
    },1000);
}();


















