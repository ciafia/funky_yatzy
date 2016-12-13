
function addDice(){
	var compDice = {1:0,2:0,3:0,4:0,5:0,6:0}
	dices.forEach(function(dice){
		compDice[dice.value]++
	})
	return compDice;
}
function fullhouse(){
	var hand = addDice();
	firstCount = false;
	secondCount = false;
	result = 0;
	for(var prop in hand){
		if(hand[prop] == 2){
			firstCount = true;
		}
		if(hand[prop] == 3){
			secondCount = true;
		}
	}
	if(firstCount === true && secondCount === true){
		dices.forEach(function(dice){
		result = result + dice.value;
		})
	}
	if( $(".fullhouse .p-" + turn.player).hasClass("full") != true){
	printScore(turn.player,"fullhouse",result)
	addScoreTwo(result);
	printSum(turn.player);
	whosPlaying();
	}
	else{
		alert("Please choose another point!");
	}
}
function pair(){
	var hand = addDice();
	result = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 2){
				result = i * 2
			}
		}
	if( $(".pair .p-" + turn.player).hasClass("full") != true){
		printScore(turn.player,"pair",result)
		addScoreTwo(result);
		printSum(turn.player);
		whosPlaying();
	}	
	else{
		alert("Please choose another point!");
	}
}
function twoPair(){
	var hand = addDice();
	count = 0;
	result = 0;
	for(var prop in hand){
		if(hand[prop] >= 2){
			result = result + prop * 2;
			count++
		}
	}
	if(count < 2){
		result = 0;
	}
	if( $(".2pair .p-" + turn.player).hasClass("full") != true){
		printScore(turn.player,"2pair",result)
		addScoreTwo(result);
		printSum(turn.player);
		whosPlaying();
	}	
	else{
		alert("Please choose another point!");
	}
}

function threeOfAKind(){
	var hand = addDice();
	result = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 3){
				result = i * 3;
			}
		}
		if( $(".3ofakind .p-" + turn.player).hasClass("full") != true){
		printScore(turn.player,"3ofakind",result)
		addScoreTwo(result);
		printSum(turn.player);
		whosPlaying();
	}	
	else{
		alert("Please choose another point!");
	}
}
function fourOfAKind(){
	var hand = addDice();
	result = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 4){
				result = i * 4;
			}
		}
	if( $(".4ofakind .p-" + turn.player).hasClass("full") != true){
		printScore(turn.player,"4ofakind",result)
		addScoreTwo(result);
		printSum(turn.player);
		whosPlaying();
	}	
	else{
		alert("Please choose another point!");
	}

}
function yatzy(){
	var hand = addDice();
	result = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 5){
				result = 50;
			}
		}
	if( $(".yatzy .p-" + turn.player).hasClass("full") != true){
		printScore(turn.player,"yatzy",result)
		addScoreTwo(result);
		printSum(turn.player);
		whosPlaying();
	}	
	else{
		alert("Please choose another point!");
	}
}
function SMstraight(){
	var hand = addDice();
	count = 0;
	result = 0
	for(var i = 1; i <= 5; i++){
		if(hand[i] == 1){
			count++
		}
	}
	if(count === 5){
		result = 15;
	}
	if( $(".smallstraight .p-" + turn.player).hasClass("full") != true){
		printScore(turn.player,"smallstraight",result)
		addScoreTwo(result);
		printSum(turn.player);
		whosPlaying();
	}	
	else{
		alert("Please choose another point!");
	}
}
function Lstraight(){
	var hand = addDice();
	count = 0;
	result = 0
	for(var i = 2; i <= 6; i++){
		if(hand[i] == 1){
			count++
		}
	}
	if(count === 5){
		result = 20;
	}
	if( $(".largestraight .p-" + turn.player).hasClass("full") != true){
		printScore(turn.player,"largestraight",result)
		addScoreTwo(result);
		printSum(turn.player);
		whosPlaying();
	}	
	else{
		alert("Please choose another point!");
	}
}