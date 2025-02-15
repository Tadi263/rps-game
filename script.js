function getComputerChoice() {
	if(Math.random() < 0.3) //the value will have to be smaller than 0.3 for rock to picked
		{ console.log('rock');}
	else if (Math.random() > 0.6) //the value will have to be bigger than 0.6 for paper to picked
		{ console.log('paper');}
	else 				//the value will have to be between 0.3 and 0.6 for scissors to picked
		{console.log('scissors');}
				} 

                getComputerChoice()