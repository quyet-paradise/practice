$(document).ready(function() {
    $('.carousel').carousel({
      interval: 2000
    })
});

 // Scrolling Effect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').css("background-color", "white");
        $('.nav-link').css("color", "#646464");
        $('#vin_logo').attr("src","images/Vsmart-B.png");
        $('.searchbar').css("border","1px solid black");
        $('.search_icon').css("color","black");
        $('.search_input').css("color", "black");
    }
    else {
        $('nav').css("background-color", "transparent");
        $('.nav-link').css("color", "white");
        $('#vin_logo').attr("src","images/Vsmart-W.png");
        $('.searchbar').css("border","1px solid white");
        $('.search_icon').css("color","white");
        $('.search_input').css("color", "white");
    }
});