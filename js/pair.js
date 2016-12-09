function pair(){

	// variabeln dice1 håller i första tärningens värde
	var dice1 = dices[0].value;

	// firstResult håller i slutvärdet. Finns inget matchning är den 0
	firstResult = 0;

		// gör en match med resterande tärningar (börjar på index 1 för att inte räkna sig själv)
		for(var j = 1; j < 5; j++){

			// comparedDice representerar tärningen som jämförs med dice1
			comparedDice = dices[j].value;

		// om dice1 matchas med någon av de andra tärningarna... 
		if(dice1 == comparedDice){

			// ...blir firstResult: värdet av dice1 + matchningen (t ex 2 + 2)
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

	// endResult håller i slutresultat (finns ingen match är den 0)	
	var endResult = 0

	// jämför alla resultaten med varandra 
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