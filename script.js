function getComputerChoice() {

    let ran = Math.random();
    console.log(ran);
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

let result = getComputerChoice();
console.log(result);


//Ask the user about their choice 
let choice = prompt("Your Choice: ");
let humanChoice = getHumanChoice(choice);
function getHumanChoice(choice) {

    //Return the value depending on their choice
    if (choice === "Rock") {
        return "Rock";
    }

    else if (choice === "Paper") {
        return "Paper";
    }

    else if (choice === "Scissor") {
        return "Scissor";
    }
}



//Test what my function returns 
console.log(humanChoice);


let humanScore = 0;
let computerScore = 0;


function playRound(humanScore, computerScore) {

    //Make the inputs case insensitive by changing the inputs to all uppercase no matter.
    let upperhumanScore = toUpperCase(humanScore);

    switch (upperhumanScore, computerScore) {
        case (upperhumanScore === "ROCK" && computerScore === "Rock"):
            console.log("It's a tie! No points will be given.");
            break;
        case (upperhumanScore === "PAPER" && computerScore === "Paper"):
            console.log("It's a tie! No points will be given.");
            break;

        case (upperhumanScore === "SCISSOR" && computerScore === "Scissor"):
            console.log("It's a tie! No points will be given.");
            break;

        case (upperhumanScore === "ROCK" && computerScore === "Paper"):
            console.log("You lost! Paper beats Rock.");
            break;

        case (upperhumanScore === "" && computerScore === ""):
            console.log();
            break;

        case (upperhumanScore === "" && computerScore === ""):
            console.log();
            break;

    }







}