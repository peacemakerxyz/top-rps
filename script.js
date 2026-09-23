/*
Put the functions inside the new function except for the choice
Create a for loop until 5 as the indicator that it's 5 rounds
Pass the functions, score counter as arguments to the play game
Use the arguments inside the function and let the loop do it's thing
*/
function playGame(choice) {

    //Initialize the function
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {

        let ran = Math.random();
        // If the random value lands between 0 and 0.33 it equals to rock
        if (ran >= 0 && ran < 0.33) {
            return "Rock";
        }
        //If the random value lands between 0.34 and 0.667 it equals to paper
        else if (ran > 0.34 && ran < 0.667) {
            return "Paper";
        }
        //If the random value lands between 0.668 and 1 it equals to scissor
        else if (ran > 0.68 && ran < 1) {
            return "Scissor";
        }

    }

    //Function initialization
    function getHumanChoice(choice) {

        //Return the value depending on their choice
        if (choice === "ROCK") {
            return "Rock";
        }

        else if (choice === "PAPER") {
            return "Paper";
        }

        else if (choice === "SCISSOR") {
            return "Scissor";
        }
    }



    function playRound(computerChoice, humanChoice) {
        // Tie Cases
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! No points will be given.`);
            return;
        }

        // Human Won Cases
        if (
            (humanChoice === "Rock" && computerChoice === "Scissor") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissor" && computerChoice === "Paper")
        ) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        // Computer Won Cases
        else {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    for (let i = 1; i <= 5; i++) {

        //Ask the user about their choice 
        let pick = prompt("Your Choice: ");
        //Make the argument case insensitive
        let choice = pick.toUpperCase();


        console.log(`Round ${i}: `);
        playRound(getComputerChoice(), getHumanChoice(choice));

        // Check the current Score
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);


    }

    if (humanScore > computerScore) {
        console.log("Congrats! You won the game.")
    }
    else if (humanScore < computerScore) {
        console.log("Nice try! Computer won the game.")
    }
    else {
        console.log("It's a tie.");
    }
}

playGame();
