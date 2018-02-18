var goku;
var vegeta;
var piccolo;
var frieza;
var isCharacterChosen = false;

$(document).ready(function () {

    $("#gokufight").on("click", function () {
        $("#gokufight").appendTo("#you");
        isCharacterChosen = true;
        fighterChosen("goku");
        
        
    });
    $("#vegetafight").on("click", function () {
        $("#vegetafight").appendTo("#you");
        isCharacterChosen = true;
        fighterChosen("vegeta");
       

    });
    $("#piccolofight").on("click", function () {
        $("#piccolofight").appendTo("#you");
        isCharacterChosen = true;
        fighterChosen("piccolo");
        
    });
    $("#friezafight").on("click", function () {
        $("#friezafight").appendTo("#you");
        isCharacterChosen = true;
        fighterChosen("frieza");
        
    });
});

function fighterChosen(characterChosen){
    if (characterChosen === "goku") {
        $("#vegetafight").appendTo("#enemy1").off();
        $("#piccolofight").appendTo("#enemy2").off();
        $("#friezafight").appendTo("#enemy3").off();
    }else if(characterChosen === "vegeta") {
        $("#gokufight").appendTo("#enemy1").off();
        $("#piccolofight").appendTo("#enemy2").off();
        $("#friezafight").appendTo("#enemy3").off();
    }else if(characterChosen === "piccolo") {
        $("#gokufight").appendTo("#enemy1").off();
        $("#vegetafight").appendTo("#enemy2").off();
        $("#friezafight").appendTo("#enemy3").off();
    }else if(characterChosen === "frieza") {
        $("#gokufight").appendTo("#enemy1").off();
        $("#vegetafight").appendTo("#enemy2").off();
        $("#piccolofight").appendTo("#enemy3").off();
    }

    $("#gokufight").on("click", function () {
        $("#gokufight").appendTo("#defense");  
        
    });
    $("#vegetafight").on("click", function () {
        $("#vegetafight").appendTo("#defense");

    });
    $("#piccolofight").on("click", function () {
        $("#piccolofight").appendTo("#defense");
        
    });
    $("#friezafight").on("click", function () {
        $("#friezafight").appendTo("#defense");

    });
}




// if (!isOperatorClicked) {
    //     //build x value
    //     x += a;
    //     $("#first-number").text(x);
    // }


