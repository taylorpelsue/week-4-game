var chosenFighter;
var enemyFighter;
var fighters = {
    'goku': {
        id: "gokufight",
        name: 'Goku',
        hp: 148,
        power: 10,
        increment: 5,
        image: 'goku.png'
    },
    'vegeta': {
        id: "vegetafight",
        name: 'Vegeta',
        hp: 145,
        power: 10,
        increment: 4,
        image: 'vegeta.png'
    },
    'piccolo': {
        id: "piccolofight",
        name: 'Piccolo',
        hp: 137,
        power: 8,
        increment: 6,
        image: 'piccolo.png'
    },
    'frieza': {
        id: "friezafight",
        name: 'Frieza',
        hp: 150,
        power: 12,
        increment: 3,
        image: 'frieza.png'
    }
}

$(document).ready(function () {

    $("#startover").hide();
    displayFighter(fighters['goku']);
    displayFighter(fighters['vegeta']);
    displayFighter(fighters['piccolo']);
    displayFighter(fighters['frieza']);

    $("#gokufight").on("click", function () {
        $("#gokufight").appendTo("#you");
        chosenFighter = fighters['goku'];
        fighterChosen();
    });
    $("#vegetafight").on("click", function () {
        $("#vegetafight").appendTo("#you");
        chosenFighter = fighters['vegeta'];
        fighterChosen();
    });
    $("#piccolofight").on("click", function () {
        $("#piccolofight").appendTo("#you");
        chosenFighter = fighters['piccolo'];
        fighterChosen();
    });
    $("#friezafight").on("click", function () {
        $("#friezafight").appendTo("#you");
        chosenFighter = fighters['frieza'];
        fighterChosen();
    });
});

function fighterChosen() {
    if (chosenFighter.id === "gokufight") {
        $("#vegetafight").appendTo("#enemy1").off();
        $("#piccolofight").appendTo("#enemy2").off();
        $("#friezafight").appendTo("#enemy3").off();
    } else if (chosenFighter.id === "vegetafight") {
        $("#gokufight").appendTo("#enemy1").off();
        $("#piccolofight").appendTo("#enemy2").off();
        $("#friezafight").appendTo("#enemy3").off();
    } else if (chosenFighter.id === "piccolofight") {
        $("#gokufight").appendTo("#enemy1").off();
        $("#vegetafight").appendTo("#enemy2").off();
        $("#friezafight").appendTo("#enemy3").off();
    } else if (chosenFighter.id === "friezafight") {
        $("#gokufight").appendTo("#enemy1").off();
        $("#vegetafight").appendTo("#enemy2").off();
        $("#piccolofight").appendTo("#enemy3").off();
    }

    $("#gokufight").on("click", function () {
        $("#gokufight").appendTo("#defense");
        enemyFighter = fighters['goku'];
    });
    $("#vegetafight").on("click", function () {
        $("#vegetafight").appendTo("#defense");
        enemyFighter = fighters['vegeta'];
    });
    $("#piccolofight").on("click", function () {
        $("#piccolofight").appendTo("#defense");
        enemyFighter = fighters['piccolo'];
    });
    $("#friezafight").on("click", function () {
        $("#friezafight").appendTo("#defense");
        enemyFighter = fighters['frieza'];
    });

    $("#attack").click(function () {
        chosenFighter.hp = chosenFighter.hp - enemyFighter.power;
        enemyFighter.hp = enemyFighter.hp - chosenFighter.power;
        chosenFighter.power = chosenFighter.power + chosenFighter.increment;
        redisplayFighter(chosenFighter);
        redisplayFighter(enemyFighter);

        if (enemyFighter.hp <= 0) {
            $("#" + enemyFighter.id).hide();
        };
        if (chosenFighter.hp <= 0) {

            $("#vs").html("Game Over! Try again?");
            $("#attack").hide();
            $("#startover").show();
        }
        $("#startover").click(function () {
            location.reload();
        });

    });
}

function displayFighter(fighter) {
    var fighterDiv = "<div class='col-md-3'>" +
        "<div class='fighter' id='" + fighter.id + "'>" +
        "<p class='name'>" + fighter.name + "</p>" +
        "<p class='hp'>" + fighter.hp + "</p>" +
        "<img class='fighter-image' src='assets/images/" + fighter.image + "'>" +
        "</div>" +
        "</div>";
    $("#fighters").append(fighterDiv);
}

function redisplayFighter(fighter) {
    var fighterDiv = "<div class='fighter' id='" + fighter.id + "'>" +
        "<p class='name'>" + fighter.name + "</p>" +
        "<p class='hp'>" + fighter.hp + "</p>" +
        "<img class='fighter-image' src='assets/images/" + fighter.image + "'>" +
        "</div>";
    $("#" + fighter.id).replaceWith(fighterDiv)
}

// FIGHTING POWER; ATTACK POWER GAINED PER ATTACK
//Frieza: 25; 8
//Goku: 20; 10
//Piccolo: 16; 12
//Vegeta: 20; 8


