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

//Ask the user about their choice 
let pick = prompt("Your Choice: ");

//Make the argument case insensitive
let choice = pick.toUpperCase();

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


//Initialize the function
let humanScore = 0;
let computerScore = 0;

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

playRound(getComputerChoice(), getHumanChoice(choice));

// Check the current Score
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);