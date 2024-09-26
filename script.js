let humanScore = 0
let computerScore = 0


function getComputerChoice(){

    let result = Math.random()*3

    if (result <= 1){
        return "rock"
    }
    else if (result <= 2){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice(){
    let choice;
    do {
        choice = prompt()
        const check = choice.toLowerCase()
        if (check == "rock" || check == "scissors" || check == "paper"){
            return check
        }
    } while (1)
}

function playRound(humanChoice, computerChoice) {
    //Player wins
    if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock")
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beat paper")
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors")
        humanScore++;
    }

    //Player loses
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock")
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beat paper")
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors")
        computerScore++;
    }

    //Tie
    else {
        console.log("It's a tie!")
    }

    console.log("Player score: " + humanScore)
    console.log("Computer score: " + computerScore)
    
    return
}

function playGame() {
    let roundsPlayed = 0

    while (roundsPlayed < 5){
        console.log("Round " + (roundsPlayed+1))
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log("Human's choice: " + humanSelection)
        console.log("Computer's choice: " + computerSelection)
        console.log(playRound(humanSelection, computerSelection))
        roundsPlayed++
    }

    if (humanScore > computerScore){
        console.log("Congratulations! You've won the game!")
    }
    else if (computerScore > humanScore){
        console.log("Too bad! You've lost the game.")
    }
    else {
        console.log("It's a tie!")
    }

    return
}

console.log(playGame())