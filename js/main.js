// Array för alla tärningar med tre olika nycklar. Namn, value = värdet på tärningen,
// rollable = Är rollable true kan man kasta tärningen. Är den false så har man sparat värdet.
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
//Turns are working and now we need to finish up and also print score in DOM
var turn = {
    "rolls":0,
    "player":0
}
var players = []
var scoreOne = []
var scoreTwo = []
var bonus = []
//Choosing number of player (maximum of 4)
function choosePlayers(count){
    if(count <= 3){
        for(var i = 0; i < count; i++){
        players.push(i);
        scoreOne.push(0);
        scoreTwo.push(0);
        bonus.push(0);
    }
    }
    else{
        for(var i = 0; i <= 3; i++){
        players.push(i);
        scoreOne.push(0);
        scoreTwo.push(0);
        bonus.push(0);
    }
    }
}
//determing who is playing and changes turn to next player
function whosPlaying(){
    turn.rolls = 0;
    dices.forEach(function(dice){
        dice.value = 0;
        $("." + dice.name).html("<img src='img/dices/" + dice.name + ".jpg'>");
        dice.rollable = true;
    })
    if(turn.player < players.length - 1){
    turn.player++
    }
    else{
        turn.player = 0;
    }
}
//Prints score in dom
function printScore(player,point,score){
        $("." + point + " .p-" + player).append("<p>" + score + "</p>");
        $("." + point + " .p-" + player).addClass("full")
}
function printTotal(player){
    $(".total .p-" + player).html(scoreOne[player])
}
function printSum(player){
    finalscore = scoreOne[player] + scoreTwo[player] + bonus[player]
    $(".sum .p-" + turn.player).html(finalscore)
}
//Adds score to scoreOne array
function addScoreOne(score){
    scoreOne[turn.player] = scoreOne[turn.player] + score;
}
//Adds score to scoreTwo array
function addScoreTwo(score){
    scoreTwo[turn.player] = scoreTwo[turn.player] + score;
}
function addBonus(score){
    if(score > 60 && bonus[turn.player] < 50){
        bonus[turn.player] = 50
        $(".bonus .p-" + turn.player).html(bonus[turn.player])
    }
    $(".bonus .p-" + turn.player).html(bonus[turn.player])
}

//forEach loop som går igenom varje tärning och slumpar fram ett nummer mellan 1-6
// Vi använder jQuery för att visa tärningar med rätt antal prickar.
function rollDice() {
    if(turn.rolls < 3){
        dices.forEach(function(dice) {
            if(dice.rollable == true){
                dice.value = Math.floor(Math.random() * 6) + 1;

                $("." + dice.name).html("<img src='img/dices/dice" + dice.value + ".jpg'>");
            }
         }); 
        turn.rolls++ 
    } 
    else{
        alert("Please choose point");
    } 
}

// Knapp för att rulla tärningarna
$(document).ready(function() {

    $(".Addplayer button").on("click", function(){
        var countPlayers = prompt("please enter player count:", "1")
        choosePlayers(countPlayers);
        $(".Addplayer").remove();
    })

    $(".roll").on("click", function() {
        rollDice();
    });

// Onclick funktion som gör att när du tycker på tärningen så sparar man tärningen och så
// går den från rollable = true till rollable = false och kommer därför inte ändras
// vid nästa kast.
console.log(dices);
    dices.forEach(function(dice){
        $("." + dice.name).on("click", function(){
            if(dice.value > 0){
                if(dice.rollable == true){
                    dice.rollable = false;
                    $("." + dice.name).addClass("hold");
                }
                else{
                    dice.rollable = true;
                    $("." + dice.name).addClass("no-hold");
                    
                }
            }
        })
    })
    //Our table functions:
    $(".one").on("click", function(){
        ones();
    })
    $(".two").on("click", function(){
        twoes();
    })
    $(".three").on("click", function(){
        threes();
    })
    $(".four").on("click", function(){
        fours();
    })
    $(".five").on("click", function(){
        fives();
    })
    $(".six").on("click", function(){
        sixes();
    })
    $(".pair").on("click", function(){
        pair();
    })
    $(".2pair").on("click", function(){
        twoPair();
    })
    $(".3ofakind").on("click", function(){
        threeOfAKind();
    })
    $(".4ofakind").on("click", function(){
        fourOfAKind();
    })
    $(".smallstraight").on("click", function(){
        SMstraight();
    })
    $(".largestraight").on("click", function(){
        Lstraight();
    })
    $(".fullhouse").on("click", function(){
        fullhouse();
    })
    $(".chance").on("click", function(){
        chance();
    })
    $(".yatzy").on("click", function(){
        yatzy();
    })
});
