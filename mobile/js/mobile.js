$(function (){
    var btn_galleryL = $("#btn_galleryL");
    var btn_galleryR = $("#btn_galleryR");
    var galleryList = $('.gallery_bar').children('ul').children('li');
    var galleryListIndex = galleryList.length;
    var galleryWidth = galleryListIndex*300;    //list개수*(max-height)
    var galleryImg = galleryList.children('img');
    var Left;
    var Right;
    EventList();
    
    setInterval(function(){
        $(".cat_wrap .cat_img").eq(1).animate({'margin-left':'-100%'},function(){
            $(".cat_wrap .cat_img").eq(1).prependTo('.cat_wrap')
            $(".cat_wrap .cat_img").eq(0).css({'margin-left':'0%'})
        })
    },4000)
    setInterval(function(){
        $(".dog_wrap .dog_img").eq(1).animate({'margin-left':'100%'},function(){
            $(".dog_wrap .dog_img").eq(1).prependTo('.dog_wrap')
            $(".dog_wrap .dog_img").eq(0).css({'margin-left':'0%'})
        })
    },5000)
    setInterval(function(){
        $(".rabbit_wrap .rabbit_img").eq(1).animate({'margin-left':'-100%'},function(){
            $(".rabbit_wrap .rabbit_img").eq(1).prependTo('.rabbit_wrap')
            $(".rabbit_wrap .rabbit_img").eq(0).css({'margin-left':'0%'})
        })
    },4500)
    setInterval(function(){
        $(".deer_wrap .deer_img").eq(1).animate({'margin-left':'100%'},function(){
            $(".deer_wrap .deer_img").eq(1).prependTo('.deer_wrap')
            $(".deer_wrap .deer_img").eq(0).css({'margin-left':'0%'})
        })
    },5500)

    function MoveGalleryR(){
        Right = Number(galleryList.css('transform').split(',')[4]);
        if(Right > -galleryWidth){
            Right -= 100;
            galleryList.stop().css({'transform':'translateX(' + Right + 'px)'});
        }else{
            galleryList.stop().css({'transform':'translateX(' + -galleryWidth + 'px)'});
        }
    }
    function MoveGalleryL(){
        Left = Number(galleryList.css('transform').split(',')[4]);
        if(Left < 0){
            Left += 100;
            galleryList.stop().css({'transform':'translateX(' + Left + 'px)'});
        }else{
            galleryList.stop().css({'transform':'translateX(0px)'});
        }
    }

    function ChangeGallery(){
        let i;
        i = $(this).attr('src');
        $("#gallery_main").attr('src', i);
    }

    function EventList(){
        btn_galleryL.on('click', MoveGalleryL);
        btn_galleryR.on('click', MoveGalleryR);
        galleryImg.on('click', ChangeGallery);
    }

});