// Array för alla tärningar
var dices = [
    {
        "name": "dice1",
        "value": 0,
        "rollable": true
    },
    {
        "name": "dice2",
        "value": 0,
        "rollable": true
    },
    {
        "name": "dice3",
        "value": 0,
        "rollable": true
    },
    {
        "name": "dice4",
        "value": 0,
        "rollable": true
    },
    {
        "name": "dice5",
        "value": 0,
        "rollable": true
    }
];

//Funktion för att slumpar fram ett nummer mellan 1-6 för 5 tärningar.

function rollDice() {
    dices.forEach(function(dice) {
        if(dice.rollable == true){
        dice.value = Math.floor(Math.random() * 6) + 1;

        $("." + dice.name).html("<img src='img/dices/dice" + dice.value + ".gif'>");
        }
    });   
}

// Knapp för att rulla tärningarna
$(document).ready(function() {

    $(".roll").on("click", function() {
        rollDice();
    });

// Hold Funktion
console.log(dices);
    $(".dice1").on("click", function() {

        if(dices[0].rollable == true){
            dices[0].rollable = false;
            $(".dice1").append("<p>Hold</p>");
        }
        else{
            dices[0].rollable = true;
            $(".dice1 p").remove();
        }    
            console.log(dices[0].rollable);
    });

    $(".dice2").on("click", function() {

        if(dices[1].rollable == true){
            dices[1].rollable = false;
            $(".dice2").append("<p>Hold</p>");
        }
        else{
            dices[1].rollable = true;
            $(".dice2 p").remove();
        }
            console.log(dices[1].rollable);

    });

    $(".dice3").on("click", function() {

        if(dices[2].rollable == true){
            dices[2].rollable = false;
            $(".dice3").append("<p>Hold</p>");
        }
        else{
            dices[2].rollable = true;
            $(".dice3 p").remove();
        }
            console.log(dices[2].rollable);

    });

    $(".dice4").on("click", function() {

        if(dices[3].rollable == true){
            dices[3].rollable = false;
            $(".dice4").append("<p>Hold</p>");
        }
        else{
            dices[3].rollable = true;
            $(".dice4 p").remove();
        }
            console.log(dices[3].rollable);

    });

    $(".dice5").on("click", function() {
        if(dices[4].rollable == true){
            dices[4].rollable = false;
            $(".dice5").append("<p>Hold</p>");
        }
        else{
            dices[4].rollable = true;
            $(".dice5 p").remove();
        }
            console.log(dices[4].rollable);
    });
});
