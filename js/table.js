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
	console.log(result);
}
function twoes(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 2){
			count++
		}
	})
	var result = count * 2;
	console.log(result);
}
function threes(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 3){
			count++
		}
	})
	var result = count * 3;
	console.log(result);
}
function fours(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 4){
			count++
		}
	})
	var result = count * 4;
	console.log(result);
}
function fives(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 5){
			count++
		}
	})
	var result = count * 5;
	console.log(result);
}
function sixes(){
	var count = 0;
	dices.forEach(function(dice){

		if(dice.value === 6){
			count++
		}
	})
	var result = count * 6;
	console.log(result);
}

function chance() {
	//ifall det inte finns ngt resultat vill vi ha 0 och inte undefined
    var sum = 0;

    // går igenom alla tärningar 
    dices.forEach(function(dice) {

    	// var som representerar värdet för varje tärning
        var x = dice.value;

        // summan = alla tärningarnas värde tillsammans
        sum = sum + x; 
    });
    console.log(sum);
}