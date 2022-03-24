$(function (){
    var header = $("header");
    var menu = header.find('nav').find(".menu").children('li');
    var subHeight;
    var subList;

    EventMenu();

    // submenu의 길이에 따라 높이 변경
    function ShowMenu(){
        $(this).find('.sub_menu').children('li').stop().fadeIn()
        subHeight = $(this).find('.sub_menu').children('li').outerHeight();
        subList = $(this).find('.sub_menu').children('li').length;
        $('.sub_menu').stop().animate({'height': subHeight+'px'}, 1000);
        $(this).find('.sub_menu').stop().animate({'height': subHeight*subList+'px'}, 1000);
    }

    function TextHide(){
        $(this).find('.sub_menu').children('li').stop().fadeOut();
    }

    function HideMenu(){
        $(this).find('.sub_menu').stop().animate({'height': 0+'px'}, 800);
    }
    function EventMenu(){
        menu.on('mouseenter',ShowMenu);
        menu.on('mouseleave', TextHide);
        header.on('mouseleave',HideMenu);
    }
})