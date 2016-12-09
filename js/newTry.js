
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
}
function threes(){
	var hand = addDice();
	threes = 0;
	sum = 0;
	for(var prop in hand){
		if(hand[prop] >= 3){
			sum = sum + prop * 3;
			threes++
		}
	}
	if(threes == 1){
		console.log(sum);
	}
}