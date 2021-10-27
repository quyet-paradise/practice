$(document).ready(function () {
    // Scrolling Effect
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $('.navigation').css("background-color", "black");
        }
        else {
            $('.navigation').css("background-color", "transparent");
        }
    });

    $('.toggle-button').click(function (e) {
        var subNavDisplay = $('.sub-nav-content').css('display');
        // console.log(subNavDisplay, typeof(subNavDisplay));
        console.log(e);

        if (subNavDisplay === 'none') {
            $('.sub-nav-content').css("display", "block");
        } else {
            $('.sub-nav-content').css("display", "none");
        }
        e.preventDefault();
    });

    $('.account-sub-menu').mouseover(function (e) {
        var subMenuAccount = $('.account-menu-content').css('display');
        if (subMenuAccount === 'none') {
            $('.account-menu-content').css("display", "block");
        }
        e.preventDefault();
    });

    $('.account-sub-menu').mouseout(function (e) {
        var subMenuAccount = $('.account-menu-content').css('display');
        if (subMenuAccount === 'block') {
            $('.account-menu-content').css("display", "none");
        }
        e.preventDefault();
    });

    $('.notification-sub-menu').mouseover(function (e) {
        var subMenuNotification = $('.notification-menu-content').css('display');
        if (subMenuNotification === 'none') {
            $('.notification-menu-content').css("display", "block");
        }
        e.preventDefault();
    });

    $('.notification-sub-menu').mouseout(function (e) {
        var subMenuNotification = $('.notification-menu-content').css('display');
        if (subMenuNotification === 'block') {
            $('.notification-menu-content').css("display", "none");
        }
        e.preventDefault();
    });

    var vid = document.getElementById("vid");
    vid.onplaying = function() {
        // console.log("video is playing");
        $('.image-banner-1').css("display", "none");
        $('.video-trailer-banner-1').css("display", "block");
        $('.btn-replay').css("display", "none");
        $('.btn-sound').css("display", "inline");
    }
    vid.onended = function() {
        // console.log("video is stopped");
        $('.image-banner-1').css("display", "block");
        $('.video-trailer-banner-1').css("display", "none");
        $('.btn-replay').css("display", "inline");
        $('.btn-sound').css("display", "none");
    }

    $('.btn-replay').click(function (e) {
        vid.play();
    });
    $('.btn-sound').click(function (e) {
        $('.btn-muted').css("display", "inline");
        $('.btn-sound').css("display", "none");
        vid.muted = true;
    });
    $('.btn-muted').click(function (e) {
        $('.btn-muted').css("display", "none");
        $('.btn-sound').css("display", "inline");
        vid.muted = false;
    });

    var posTemp = 0;
    var moviesItems = document.querySelector('.movies-items');
    var itemsArr = Array.from(moviesItems.querySelectorAll('.item'));


    $('.right-arrow').click(function (e) {
        posTemp -= 1000;
        var command = 'translate3d(' + posTemp + 'px, 0px, 0px)';

        for (let index = 0; index < itemsArr.length; index++) {
            $(itemsArr[index]).css("transform", command);
            $(itemsArr[index]).css("transition-duration", "500ms");
            $(itemsArr[index]).css("transition-delay", "0ms");
        }
        e.preventDefault()   
    });

    $('.left-arrow').click(function (e) {
        posTemp += 1000;
        var command = 'translate3d(' + posTemp + 'px, 0px, 0px)';

        for (let index = 0; index < itemsArr.length; index++) {
            $(itemsArr[index]).css("transform", command);
            $(itemsArr[index]).css("transition-duration", "500ms");
            $(itemsArr[index]).css("transition-delay", "0ms");
        }
        e.preventDefault();  
    });

    $('.item').mouseover(function (e) {
        if (this === itemsArr[0]) {
            translateFirstItem(this, posTemp);
            for (let idx = 1; idx < itemsArr.length; idx++) { 
                translateAllItemsRight(itemsArr[idx], posTemp);
            }
        } else {
            for (let index = 0; index < itemsArr.length; index++) {
                if (this === itemsArr[index]) {
                    mouseoverItem(this, posTemp);
    
                    for (let idx = 0; idx < itemsArr.length; idx++) {
                        if (idx > index) {
                            translateItemRight(itemsArr[idx], posTemp);
                        } else if (idx < index) {
                            translateItemLeft(itemsArr[idx], posTemp);
                        }                   
                    }
                }  
            } 
        }
    });

    $('.item').mouseout(function (e) {
        for (let index = 0; index < itemsArr.length; index++) {
            mouseoutItem(itemsArr[index], posTemp);
        }
    });
});

function mouseoverItem(x, posTemp) {
    var command = 'translate3d(' + posTemp + 'px, 0px, 0px) scale(2)';
    console.log("MouseOver: ", posTemp, command);
    $(x).css("transform", command);
    $(x).css("transition-duration", "1000ms");
    $(x).css("transition-delay", "500ms");
    $(x).css("z-index", "0");

    var itemContent = x.querySelector('.item-content');
    var playButton = itemContent.querySelector('.play-item');
    var movieName = itemContent.querySelector('.name-item');
    var movieDes = itemContent.querySelector('.description-item');
    var showMore = itemContent.querySelector('.btn-more');
    var sideButtonArr = Array.from(itemContent.querySelectorAll('.side-btn'));
    $(playButton).css("display","inline");
    $(movieName).css("display","inline");
    $(movieDes).css("display","inline");
    $(showMore).css("display","inline");
    for (let index = 0; index < sideButtonArr.length; index++) {
        $(sideButtonArr[index]).css("display","inline");
    }

    var video = itemContent.querySelector('video');
    var img = itemContent.querySelector('img');
    $(video).css("display", "block");
    $(img).css("display", "none");
    video.play();
}

function mouseoutItem(x, posTemp) {
    var command = 'translate3d(' + posTemp + 'px, 0px, 0px) scale(1)';
    console.log("MouseOut: ", posTemp, command);
    $(x).css("transform", command);
    $(x).css("transition-duration", "1000ms");
    $(x).css("transition-delay", "500ms");
    $(x).css("z-index", "0");

    var itemContent = x.querySelector('.item-content');
    var playButton = itemContent.querySelector('.play-item');
    var movieName = itemContent.querySelector('.name-item');
    var movieDes = itemContent.querySelector('.description-item');
    var showMore = itemContent.querySelector('.btn-more');
    var sideButtonArr = Array.from(itemContent.querySelectorAll('.side-btn'));
    $(playButton).css("display","none");
    $(movieName).css("display","none");
    $(movieDes).css("display","none");
    $(showMore).css("display","none");
    for (let index = 0; index < sideButtonArr.length; index++) {
        $(sideButtonArr[index]).css("display","none");
    }

    var video = itemContent.querySelector('video');
    var img = itemContent.querySelector('img');
    $(video).css("display", "none");
    $(img).css("display", "block");
    video.pause();
    video.currentTime = 0;
}

function translateItemRight(x, posTemp) {
    var command = 'translate3d(' + (posTemp + 132) + 'px, 0px, 0px)';
    console.log("Right: ",command);
    $(x).css("transform", command);
    $(x).css("transition-duration", "1000ms");
    $(x).css("transition-delay", "500ms");
    $(x).css("z-index", "0");
}

function translateItemLeft(x, posTemp) {
    var command = 'translate3d(' + (posTemp - 132) + 'px, 0px, 0px)';
    console.log("Left: ",command);
    $(x).css("transform", command);
    $(x).css("transition-duration", "1000ms");
    $(x).css("transition-delay", "500ms");
    $(x).css("z-index", "0");
}

function translateFirstItem(x, posTemp) {
    var command = 'scale(2) translate3d(' + (posTemp + 66) + 'px, 0px, 0px)';
    $(x).css("transform", command);
    $(x).css("transition-duration", "1000ms");
    $(x).css("transition-delay", "500ms");
    $(x).css("z-index", "0");

    var itemContent = x.querySelector('.item-content');
    var playButton = itemContent.querySelector('.play-item');
    var movieName = itemContent.querySelector('.name-item');
    var movieDes = itemContent.querySelector('.description-item');
    var showMore = itemContent.querySelector('.btn-more');
    var sideButtonArr = Array.from(itemContent.querySelectorAll('.side-btn'));
    $(playButton).css("display","inline");
    $(movieName).css("display","inline");
    $(movieDes).css("display","inline");
    $(showMore).css("display","inline");
    for (let index = 0; index < sideButtonArr.length; index++) {
        $(sideButtonArr[index]).css("display","inline");
    }

    var video = itemContent.querySelector('video');
    var img = itemContent.querySelector('img');
    $(video).css("display", "block");
    $(img).css("display", "none");
    video.play();
}

function translateAllItemsRight(x, posTemp) {
    var command = 'translate3d(' + (posTemp + 265) + 'px, 0px, 0px)';
    $(x).css("transform", command);
    $(x).css("transition-duration", "1000ms");
    $(x).css("transition-delay", "500ms");
    $(x).css("z-index", "0");
}

// Helper function to get an element's exact position
// function getPosition(el) {
//     var xPos = 0;
//     var yPos = 0;
   
//     while (el) {
//       if (el.tagName == "BODY") {
//         // deal with browser quirks with body/window/document and page scroll
//         var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//         var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
//         xPos += (el.offsetLeft - xScroll + el.clientLeft);
//         yPos += (el.offsetTop - yScroll + el.clientTop);
//       } else {
//         // for all other non-BODY elements
//         xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//         yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//       }
   
//       el = el.offsetParent;
//     }
//     return {
//       x: xPos,
//       y: yPos
//     };
//   }