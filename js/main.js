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


function rollDice() {
    dices.forEach(function(dice) {
        dice.value = Math.floor(Math.random() * 6) + 1;

        $("." + dice.name).html("<img src='img/dices/dice" + dice.value + ".gif'>");

    });
    
}

$(document).ready(function() {

    $(".roll").on("click", function() {
        rollDice();
        
    });

console.log(dices);

});



/* function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");

    var status = document.getElementById("status");

    for(var i = 1; i < 6; i++){
        var dice + i = Math.floor(Math.random() * 6) + 1;

        console.log(dice + i);
    };



    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var dice3 = Math.floor(Math.random() * 6) + 1;
    var dice4 = Math.floor(Math.random() * 6) + 1;
    var dice5 = Math.floor(Math.random() * 6) + 1;

    var diceTotal = dice1 + dice2 + dice3 + dice4 + dice5;

    die1.innerHTML = dice1;
    die2.innerHTML = dice2;
    die3.innerHTML = dice3;
    die4.innerHTML = dice4;
    die5.innerHTML = dice5;

    status.innerHTML = "You rolled " + diceTotal + ".";
} */