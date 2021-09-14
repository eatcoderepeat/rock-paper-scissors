const result = document.getElementById('roundResult')
const playerScore = document.getElementById('playerScore')
const cpuScore = document.getElementById('cpuScore')

var cpu
var playerCount = 0
var cpuCount = 0

function cpuSelection(){
    var rand = Math.floor(Math.random()*3) + 1
    switch(rand) {
        case 1: cpu = 'rock'
        break;
        case 2: cpu = 'paper'
        break;
        case 3: cpu = 'scissors'
        break;
    }
    console.log(cpu)
    return cpu
}

function playRound(e) {
    if (playerCount === 5 || cpuCount === 5){
        return;
    }
    result.innerText = ""
    const playerSelection = e.target.id
    console.log(playerSelection)
    cpuSelection()
    
    switch(playerSelection) {
        case 'rock':
            if (cpu === 'paper') {
                result.textContent = 'Rock gets covered by paper. You Lose!'
                cpuCount += 1
            } else if (cpu === 'scissors') {
                result.textContent = 'Rock crushes scissors. You Win!'
                playerCount += 1
            } else if (cpu === playerSelection) {
                result.textContent = "It's a Draw!"
            }
        break;
        case 'paper':
            if (cpu === 'rock') {
                result.textContent = 'Paper covers rock. You Win!'
                playerCount += 1
            } else if (cpu === 'scissors') {
                result.textContent = 'Paper is cut by scissors. You Lose!'
                cpuCount += 1
            } else if (cpu === playerSelection) {
                result.textContent = "It's a Draw!"
            }
            break;
        case 'scissors':
            if (cpu === 'rock') {
                result.textContent = 'Scissors get crushed by rock. You Lose!'
                cpuCount += 1
            } else if (cpu === 'paper') {
                result.textContent = 'Scissors cuts paper. You Win!'
                playerCount += 1
            } else if (cpu === playerSelection) {
                result.textContent = "It's a Draw!"
            }
            break;
        }

    playerScore.textContent = playerCount
    cpuScore.textContent = cpuCount
    gameOver()
}

function gameOver() {
    if (playerCount < 5 && cpuCount < 5) {
        return;
    } else if (playerCount === 5){
        alert("Game Over. You WIN!")
    } else if (cpuCount === 5) {
        alert("Game Over. You LOSE!")
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
})