$(function(){
    var menuBtn = $("#mobile_menu");
    var menuNav = $("header").children("nav");

    EventMenu();

    function MenuToggle(){
        menuNav.stop().slideToggle(1000)
    }
    function EventMenu(){
        menuBtn.on('click', MenuToggle);
    }
})