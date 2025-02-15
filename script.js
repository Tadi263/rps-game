let computerchoice = ' ';
function getComputerChoice() {
	if(Math.random() < 0.3) //the value will have to be smaller than 0.3 for rock to picked
		{ 
            computerchoice = 'Rock'
            return computerchoice;

        }
	else if (Math.random() > 0.6) //the value will have to be bigger than 0.6 for paper to picked
		{ 
            computerchoice = 'Paper'
            return computerchoice;

        }
	else 				//the value will have to be between 0.3 and 0.6 for scissors to picked
		{
            computerchoice = 'Scissors'
            return computerchoice;
        }
				} 

                getComputerChoice();


let humanchoice = '';
function getHumanChoice() {
    humanchoice = prompt('Please make a choice between Rock, Paper or Scissors', ); //Prompt user for choice
    humanchoice = humanchoice.trim().toUpperCase();  //Ensure choice is formatted to prevent discrepancies
        if(humanchoice == 'ROCK')
        {
            humanchoice = 'Rock'
            return humanchoice;
        }
        else if (humanchoice == 'PAPER')
        {
            humanchoice = 'Paper'
            return humanchoice;
        }
        else if (humanchoice == 'SCISSORS')
        {
            humanchoice = 'Scissors'
            return humanchoice;
        }
        else{
            console.log('Please enter Rock, Paper or Scissors'); 
            getHumanChoice(); //reprompt user if they enter an invalid choice
        }
                            }

                getHumanChoice();
                console.log('Human chose: ', humanchoice);
                console.log('Computer chose: ', computerchoice);



let humanScore = 0
let computerScore = 0

if (humanchoice == computerchoice)
    {
        console.log('Draw');
        console.log(humanScore);
        console.log(computerScore);
    }
else if(humanchoice === 'Rock' && computerchoice === 'Scissors')
    {
        console.log('Human wins');
        humanScore ++;
        console.log('Human score: ', humanScore);
        console.log('Computer score: ', computerScore);
    }
else if(humanchoice === 'Paper' && computerchoice === 'Rock')
    {
        console.log('Human wins');
        humanScore ++;
        console.log('Human score: ', humanScore);
        console.log('Computer score: ', computerScore);
    }
else if(humanchoice === 'Scissors' && computerchoice === 'Paper')
    {
        console.log('Human wins');
        humanScore ++;
        console.log('Human score: ', humanScore);
        console.log('Computer score: ', computerScore);
    }
else
    {
        computerScore ++;
        console.log('Human score: ', humanScore);
        console.log('Computer score: ', computerScore);;
    }
