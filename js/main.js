var dices = [
    {
        "value": 0,
        "rollable": true
    },
    {
        "value": 0,
        "rollable": true
    },
    {
        "value": 0,
        "rollable": true
    },
    {
        "value": 0,
        "rollable": true
    },
    {
        "value": 0,
        "rollable": true
    }
];




function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");

    var status = document.getElementById("status");

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

    status.innerHTML = "You rolled"+diceTotal+".";
}