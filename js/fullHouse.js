function fullHouse(){

    var pair = false;
    var threes = false;
    var dice1 = dices[0].value;
    var firstCount = 0;

        for(var i = 1; i < 5; i++){

            var comparedDice = dices[i].value;
        
                if(dice1 == comparedDice){
                firstCount ++;
        }
    }

    if(firstCount == 1) {
        pair = true;
    }
    if(firstCount == 2){
        threes = true;
    }

    var dice2 = dices[1].value;
    var secondCount = 0;

    for(var i = 2; i < 5; i++){

            var comparedDice = dices[i].value;
        
                if(dice2 == comparedDice){
                secondCount ++;
            }
        }
        if(secondCount == 1) {
            pair = true;
        }
        if(secondCount == 2){
            threes = true;
        }
    

        var dice3 = dices[2].value;
        var thirdCount = 0;

        for(var i = 3; i < 5; i++){

            var comparedDice = dices[i].value;
        
                if(dice3 == comparedDice){
                thirdCount ++;
            }
        }
        
        if(thirdCount == 1) {
        pair = true;
        }
        if(thirdCount == 2){
        threes = true;
        }
        var dice4 = dices[3].value;
        var fourthCount = 0;
        comparedDice = dices[4].value;

        if(dice4 == comparedDice){
            fourthCount++;
        }
        if(fourthCount == 1) {
        pair = true;
        }
        if(fourthCount == 2){
        threes = true;
        }
      

        var result = 0;
        if(pair === true && threes === true) {
        dices.forEach(function(dice){
        result = result + dice.value;
        });
        }
        console.log(result);
                
            
    
}

