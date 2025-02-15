function getComputerChoice() {
	if(Math.random() < 0.3) //the value will have to be smaller than 0.3 for rock to picked
		{ 
            console.log('Rock');
            return 'Rock';

        }
	else if (Math.random() > 0.6) //the value will have to be bigger than 0.6 for paper to picked
		{ 
            console.log('Paper');
            return 'Paper';

        }
	else 				//the value will have to be between 0.3 and 0.6 for scissors to picked
		{
            console.log('Scissors');
            return 'Scissors';
        }
				} 

                getComputerChoice()


function getHumanChoice() {
    let choice = prompt('Please make a choice between Rock, Paper or Scissors', ); //Prompt user for choice
    choice = choice.trim().toUpperCase();  //Ensure choice is formatted to prevent discrepancies
        if(choice == 'ROCK')
        {
            console.log('Rock');
            return 'Rock';
        }
        else if (choice == 'PAPER')
        {
            console.log('Paper');
            return 'Paper';
        }
        else if (choice == 'SCISSORS')
        {
            console.log('Scissors');
            return 'Scissors';
        }
        else{
            console.log('Please enter Rock, Paper or Scissors'); 
            getHumanChoice(); //reprompt user if they enter an invalid choice
        }
                            }
                            getHumanChoice()