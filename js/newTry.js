
function addDice(){
	var compDice = {1:0,2:0,3:0,4:0,5:0,6:0}
	dices.forEach(function(dice){
		compDice[dice.value]++
	})
	return compDice;
}
function fullhouse(){
	var hand = addDice();
	pair = false;
	threes= false;
	sum = 0;
	for(var prop in hand){
		if(hand[prop] == 2){
			pair = true;
		}
		if(hand[prop] == 3){
			threes = true;
		}
		console.log(hand[prop]);
	}
	if(pair === true && threes === true){
		dices.forEach(function(dice){
		sum = sum + dice.value;
		})
		console.log("fullhouse!" + sum)
	}
	else{
		console.log("Sorry no match! Score: " + sum);
	}
}
function pair(){
	var hand = addDice();
	sum = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 2){
				sum = i * 2
			}
		}
		console.log(sum);
}
function twoPair(){
	var hand = addDice();
	pair = 0;
	sum = 0;
	for(var prop in hand){
		if(hand[prop] >= 2){
			sum = sum + prop * 2;
			pair++
		}
	}
	if(pair == 2){
		console.log(sum);
	}
	else{
		console.log("Sorry no match! Score: " + sum);
	}
}

function threeOfAKind(){
	var hand = addDice();
	sum = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 3){
				sum = i * 3;
			}
		}
		console.log(sum);
}
function fourOfAKind(){
	var hand = addDice();
	sum = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 4){
				sum = i * 4;
			}
		}
		console.log(sum);
}
function yatzy(){
	var hand = addDice();
	sum = 0;
	for(var i = 1; i < 7; i++){
			if(hand[i] >= 5){
				sum = 50;
			}
		}
		console.log(sum);
}
function SMstraight(){
	var hand = addDice();
	count = 0;
	sum = 0
	for(var i = 1; i <= 5; i++){
		if(hand[i] == 1){
			count++
		}
	}
	if(count === 5){
		sum = 15;
	}
	console.log(sum);
}
function Lstraight(){
	var hand = addDice();
	count = 0;
	sum = 0
	for(var i = 2; i <= 6; i++){
		if(hand[i] == 1){
			count++
		}
	}
	if(count === 5){
		sum = 20;
	}
	console.log(sum);
}