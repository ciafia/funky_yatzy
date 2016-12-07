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

//Funktion för att rulla träningarna. Slumpar fram ett nummer mellan 1-6 för 5 tärningar.

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
});