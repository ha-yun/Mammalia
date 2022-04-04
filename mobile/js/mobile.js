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