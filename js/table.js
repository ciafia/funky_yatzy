function ones(){

	// Vi deklarerar variablen count för att vi vill få en nolla istället för 
	// undefined (ifall den inte hittar några ettor)
	var count = 0;

	// I forEach loopen går vi genom alla tärningar en och en
	dices.forEach(function(dice){

		// If statement = om den här tärningen är lika med 1 så plusas count med 1
		if(dice.value === 1){
			count++
		}
	})

	//resultatet gångas med 1 
	var result = count * 1;
	if( $(".one .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"one",result)
	addScoreOne(result);
	printTotal(turn.player);
	addBonus(scoreOne[turn.player]);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}
function twoes(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 2){
			count++
		}
	})
	var result = count * 2;
	if( $(".two .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"two",result)
	addScoreOne(result);
	printTotal(turn.player);
	addBonus(scoreOne[turn.player]);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}
function threes(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 3){
			count++
		}
	})
	var result = count * 3;
	if( $(".three .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"three",result)
	addScoreOne(result);
	printTotal(turn.player);
	addBonus(scoreOne[turn.player]);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}
function fours(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 4){
			count++
		}
	})
	var result = count * 4;
	if( $(".four .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"four",result)
	addScoreOne(result);
	printTotal(turn.player);
	addBonus(scoreOne[turn.player]);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}
function fives(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 5){
			count++
		}
	})
	var result = count * 5;
	if( $(".five .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"five",result)
	addScoreOne(result);
	printTotal(turn.player);
	addBonus(scoreOne[turn.player]);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}
function sixes(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 6){
			count++
		}
	})
	var result = count * 6;
	if( $(".six .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"six",result)
	addScoreOne(result);
	printTotal(turn.player);
	addBonus(scoreOne[turn.player]);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}

function chance() {
	//ifall det inte finns ngt resultat vill vi ha 0 och inte undefined
    var result = 0;

    // går igenom alla tärningar 
    dices.forEach(function(dice) {

    	// var som representerar värdet för varje tärning
        var x = dice.value;

        // summan = alla tärningarnas värde tillsammans
        result = result + x; 
    });
    if( $(".chance .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"chance",result)
	addScoreTwo(result);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}