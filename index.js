$(function (){
    var header = $("header");
    var menu = $(".menu").children('li');
    var subHeight;
    var subList;
    EventList();

    // submenu의 길이에 따라 높이 변경
    function ShowMenu(){
        $(this).find('.sub_menu').children('li').stop().fadeIn()
        subHeight = $(this).find('.sub_menu').children('li').outerHeight();
        subList = $(this).find('.sub_menu').children('li').length;
        $('.sub_menu').stop().animate({'height':0+'px'}, 1000);
        $(this).find('.sub_menu').stop().animate({'height': subHeight*subList+'px'}, 800);
    }

    function TextHide(){
        $(this).find('.sub_menu').children('li').stop().fadeOut();
    }

    function HideMenu(){
        $(this).find('.sub_menu').stop().animate({'height': 0+'px'}, 800);
    }

    function EventList(){
        menu.on('mouseenter',ShowMenu);
        menu.on('mouseleave', TextHide);
        header.on('mouseleave',HideMenu);
    }

});