let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"

let result = ""
let mistake = "Please enter rock, paper or scissors."

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1
    if (randomNumber === 1){
        return rock
    } else if (randomNumber === 2) {
        return scissors
    } else if (randomNumber === 3) {
        return paper
    }
}


function playRound() {
    let playerSelection = prompt("Select rock, paper or scissors")
    const computerSelection = computerPlay()
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === 'rock') {
        if (computerSelection === rock) {
            console.log("Computer plays rock")
            console.log ("It's a draw!")
            result = "draw"
            return result
        } else if (computerSelection === scissors) {
            console.log("Computer plays scissors")
            console.log ("You win! Rock smashes scissors")
            result = "win"
            return result
        } else if (computerSelection === paper) {
            console.log("Computer plays paper")
            console.log ("You lose! Paper covers rock")
            result = "lose"
            return result
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === rock) {
            console.log("Computer plays rock")
            console.log ("You lose! Rock smashes scissors")
            result = "lose"
            return result
        } else if (computerSelection === scissors) {
            console.log("Computer plays scissors")
            console.log ("It's a draw!")
            result = "draw"
            return result
        } else if (computerSelection === paper) {
            console.log("Computer plays paper")
            console.log ("You win! Scissors cuts paper")
            result = "win"
            return result
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === rock) {
            console.log("Computer plays rock")
            console.log ("You win! Paper covers rock")
            result = "win"
            return result
        } else if (computerSelection === scissors) {
            console.log("Computer plays scissors")
            console.log ("You lose! Scissors cuts paper")
            result = "lose"
            return result
        } else if (computerSelection === paper) {
            console.log("Computer plays paper")
            console.log ("It's a draw!")
            result = "draw"
            return result
        }
    } else {
        result = mistake
        alert("Please enter rock, paper or scissors.")
        return result
    }
}

function game(){
    let count = 0
    let playerWins = 0
    let computerWins = 0

    while (count < 5){
        playRound()
        if (result === mistake) {
            continue
        } else if (result === 'win') {
            playerWins += 1
            count += 1
        } else if (result === 'lose') {
            computerWins += 1
            count += 1
        } else if (result === 'draw') {
            count +=1
        }
        console.log ("Player: " + playerWins + " Computer: " + computerWins)
    }

    if (playerWins > computerWins) {
        alert("You are the champion!")
        console.log ("Winner")
    } else if (computerWins > playerWins) {
        alert("Better luck next time!")
        console.log ("Loser")
    } else if (playerWins === computerWins) {
        alert("It's a draw! Try again")
        console.log ("Try again")
    }
}
console.log(game())