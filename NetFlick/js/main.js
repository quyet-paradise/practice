$(document).ready(function(){
    $("#collapseOne1").on('show.bs.collapse', function(){
        $("#icon-plus1").css("transform","rotate(45deg)");
    });
    $("#collapseOne1").on('hide.bs.collapse', function(){
        $("#icon-plus1").css("transform","rotate(0deg)");
    });

    $("#collapseOne2").on('show.bs.collapse', function(){
        $("#icon-plus2").css("transform","rotate(45deg)");
    });
    $("#collapseOne2").on('hide.bs.collapse', function(){
        $("#icon-plus2").css("transform","rotate(0deg)");
    });

    $("#collapseOne3").on('show.bs.collapse', function(){
        $("#icon-plus3").css("transform","rotate(45deg)");
    });
    $("#collapseOne3").on('hide.bs.collapse', function(){
        $("#icon-plus3").css("transform","rotate(0deg)");
    });

    $("#collapseOne4").on('show.bs.collapse', function(){
        $("#icon-plus4").css("transform","rotate(45deg)");
    });
    $("#collapseOne4").on('hide.bs.collapse', function(){
        $("#icon-plus4").css("transform","rotate(0deg)");
    });

    $("#collapseOne5").on('show.bs.collapse', function(){
        $("#icon-plus5").css("transform","rotate(45deg)");
    });
    $("#collapseOne5").on('hide.bs.collapse', function(){
        $("#icon-plus5").css("transform","rotate(0deg)");
    });
});

function changeButtonText(value){
    document.getElementById('dropdownMenuButton').innerText = value;
}