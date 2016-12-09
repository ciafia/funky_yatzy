function pair(){
	var dice1 = dices[0].value;
	firstResult = 0;

		for(var j = 1; j < 5; j++){

			comparedDice = dices[j].value;

		if(dice1 == comparedDice){

			firstResult = dice1 + comparedDice;
			console.log(firstResult);

		}
		else{
			console.log("no match");
		}
	}
	var dice2 = dices[1].value;
	secondResult = 0;
		for(var j = 2; j < 5; j++){
			comparedDice = dices[j].value;

		if(dice2 == comparedDice){

			secondResult = dice2 + comparedDice;
			console.log(secondResult);

		}
		else{
			console.log("no match");
		}
	}
	var dice3 = dices[2].value;
	thirdResult = 0;
		for(var j = 3; j < 5; j++){
			comparedDice = dices[j].value;

		if(dice3 == comparedDice){

			thirdResult = dice3 + comparedDice;
			console.log(thirdResult);

		}
		else{
			console.log("no match");
		}
	}
	var dice4 = dices[3].value;
	fourthResult = 0;
	comparedDice = dices[4].value;

		if(dice4 == comparedDice){

			fourthResult = dice4 + comparedDice;
			console.log(fourthResult);

		}
		else{
			console.log("no match");
		}
	var endResult = 0
	if(firstResult >= secondResult && firstResult >= thirdResult && firstResult >= fourthResult){
		endResult = firstResult;
	}
	else if(secondResult >= thirdResult && secondResult >= fourthResult){
		endResult = secondResult
	}
	else if(thirdResult >= fourthResult){
		endResult = thirdResult
	}
	else{
		endResult = fourthResult;
	}
	console.log("the endresult: " + endResult);
}