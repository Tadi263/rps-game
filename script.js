function playGame(){
    max_rounds = 5
    let humanScore = 0; //declaring human score
    let computerScore = 0; //declaring computer score
    for(i = 0; i < max_rounds; i++) {
        let computerchoice = ' '; //declaring computer choice
        function getComputerChoice() {
            if(Math.random() < 0.3) //the value will have to be smaller than 0.3 for rock to picked
                { 
                    computerchoice = 'Rock'

                }
            else if (Math.random() > 0.6) //the value will have to be bigger than 0.6 for paper to picked
                { 
                    computerchoice = 'Paper'
                }
            else 				//the value will have to be between 0.3 and 0.6 for scissors to picked
                {
                    computerchoice = 'Scissors'
                }
                console.log('Computer chose: ', computerchoice);
                        } 

        let humanchoice = ''; //declaring human choice
        function getHumanChoice() {
            humanchoice = prompt('Please make a choice between Rock, Paper or Scissors', ); //Prompt user for choice
            humanchoice = humanchoice.trim().toUpperCase();  //Ensure choice is formatted to prevent discrepancies
                if(humanchoice == 'ROCK')
                {
                    humanchoice = 'Rock'
                    console.log('Human chose: ', humanchoice);
                }
                else if (humanchoice == 'PAPER')
                {
                    humanchoice = 'Paper'
                    console.log('Human chose: ', humanchoice);
                }
                else if (humanchoice == 'SCISSORS')
                {
                    humanchoice = 'Scissors'
                    console.log('Human chose: ', humanchoice);
                }
                else{
                    console.log('Please enter a choice between Rock, Paper or Scissors'); 
                    getHumanChoice(); //reprompt user if they enter an invalid choice
                }
                                    }
        
        function playRound(humanChoice, computerChoice) {
        //condidtions for scores
        if (humanchoice == computerchoice) 
            {
                console.log('This round is a draw');
                console.log('Human score: ', humanScore);
                console.log('Computer score: ', computerScore);
            }
        else if(humanchoice === 'Rock' && computerchoice === 'Scissors')
            {
                console.log('You win! '+ humanchoice + ' beats ' + computerchoice);
                humanScore ++;
                console.log('Human score: ', humanScore);
                console.log('Computer score: ', computerScore);
            }
        else if(humanchoice === 'Paper' && computerchoice === 'Rock')
            {
                console.log('You win! '+ humanchoice + ' beats ' + computerchoice);
                humanScore ++;
                console.log('Human score: ', humanScore);
                console.log('Computer score: ', computerScore);
            }
        else if(humanchoice === 'Scissors' && computerchoice === 'Paper')
            {
                console.log('You win! '+ humanchoice + ' beats ' + computerchoice);
                humanScore ++;
                console.log('Human score: ', humanScore);
                console.log('Computer score: ', computerScore);
            }
        else
            {
                console.log('You lose! '+ computerchoice + ' beats ' + humanchoice);
                computerScore ++;
                console.log('Human score: ', humanScore);
                console.log('Computer score: ', computerScore);
            }
        } 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    //conditions for winning the game
    if(humanScore > computerScore){
        console.log('Well done! You\'ve won the game.');
    }
    else if(humanScore < computerScore){
        console.log('You lost the game. Better luck next time.');
    }
    else{
        console.log('The game has ended in a draw.');
    }
}

playGame();