$(function (){
    var btn_galleryL = $("#btn_galleryL");
    var btn_galleryR = $("#btn_galleryR");
    var galleryList = $('.gallery_section').children('ul').children('li');
    var galleryListIndex = galleryList.length;
    var galleryWidth = (galleryListIndex-2)*265;    //list개수*250px(min-height)
    var galleryImg = galleryList.children('img');
    var Left;
    var Right;
    EventList();

    setInterval(function(){
        $(".section_img > .cat_wrap").animate({'margin-left':'-100%'},function(){
            $(".section_img .cat_img").first().appendTo('.section_img > .cat_wrap')
            $('.section_img > .cat_wrap').css({'margin-left':'0%'})
        })
    },4000)
    setInterval(function(){
        $(".section_img > .dog_wrap").animate({'margin-left':'100%'},function(){
            $(".section_img .dog_img").first().appendTo('.section_img > .dog_wrap')
            $('.section_img > .dog_wrap').css({'margin-left':'0%'})
        })
    },5000)
    setInterval(function(){
        $(".section_img > .rabbit_wrap").animate({'margin-left':'-100%'},function(){
            $(".section_img .rabbit_img").first().appendTo('.section_img > .rabbit_wrap')
            $('.section_img > .rabbit_wrap').css({'margin-left':'0%'})
        })
    },4500)
    setInterval(function(){
        $(".section_img > .deer_wrap").animate({'margin-left':'100%'},function(){
            $(".section_img .deer_img").first().appendTo('.section_img > .deer_wrap')
            $('.section_img > .deer_wrap').css({'margin-left':'0%'})
        })
    },5500)


    function MoveGalleryR(){
        Right = Number(galleryList.css('transform').split(',')[4]);
        if(Right > -galleryWidth){
            Right -= 265;
            galleryList.stop().css({'transform':'translateX(' + Right + 'px)'});
        }else{
            galleryList.stop().css({'transform':'translateX(' + -galleryWidth + 'px)'});
        }
    }
    function MoveGalleryL(){
        Left = Number(galleryList.css('transform').split(',')[4]);
        if(Left < 0){
            Left += 265;
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