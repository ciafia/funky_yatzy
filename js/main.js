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
        if(dice.rollable == true){
        dice.value = Math.floor(Math.random() * 6) + 1;

        $("." + dice.name).html("<img src='img/dices/dice" + dice.value + ".gif'>");
        }
    });
    
}

$(document).ready(function() {

    $(".roll").on("click", function() {
        rollDice();
    });

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