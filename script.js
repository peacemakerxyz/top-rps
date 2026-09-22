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

//Test the function
let result = getComputerChoice();
console.log("Result of Computer Choice: " + result);


//Ask the user about their choice 
let pick = prompt("Your Choice: ");

//Make the argument case insensitive
let choice = pick.toUpperCase();
console.log(choice);

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


//Test what my function returns 
console.log("Human Choice: " + getHumanChoice(choice));




//Declare the score counter of human and computer
let humanScore = 0;
let computerScore = 0;


//Initialize the function
function playRound(humanScore) {


    return ++humanScore;


}

//
console.log("Score: " + playRound(humanScore));
