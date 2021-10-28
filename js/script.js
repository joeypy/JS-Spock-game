// import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById("playerScore")
const playerChoiceEl = document.getElementById("playerChoice")
const computerScoreEl = document.getElementById("computerScore")
const computerChoiceEl = document.getElementById("computerChoice")
const resultText = document.getElementById("resultText")

// Player Choices DOM
const playerRock = document.getElementById("playerRock")
const playerPaper = document.getElementById("playerPaper")
const playerScissors = document.getElementById("playerScissors")
const playerLizard = document.getElementById("playerLizard")
const playerSpock = document.getElementById("playerSpock")

// Computer Choices DOM
const computerRock = document.getElementById("computerRock")
const computerPaper = document.getElementById("computerPaper")
const computerScissors = document.getElementById("computerScissors")
const computerLizard = document.getElementById("computerLizard")
const computerSpock = document.getElementById("computerSpock")

const allGameIcons = document.querySelectorAll('.far')

const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
}

let playerScoreNumber = 0
let computerScoreNumber = 0
let computerChoice = ''

// Reset all 'seleted' icons
function resetSelected() {
    allGameIcons.forEach( (icon) => {
        icon.classList.remove("selected")
    })
    import('./confetti.js')
        .then((module) => {
            module.stopConfetti()
            module.removeConfetti()
        });
}

// Reset Score & playerChoice/computerChoice 
function resetAll() {
    playerScoreNumber = 0
    computerScoreNumber = 0
    playerScoreEl.textContent = 0
    computerScoreEl.textContent = 0
    playerChoiceEl.textContent = ""
    computerChoiceEl.textContent = ""
    resultText.textContent = "Let's play!"
    resetSelected()
}
window.resetAll = resetAll

// Computer random choice
function computerRandomChoice() {
    const computerRandomNumber = Math.random()
    if (computerRandomNumber < 0.2) {
        computerChoice = 'rock'
    } else if (computerRandomNumber <= 0.4) {
        computerChoice = 'paper'
    } else if (computerRandomNumber <= 0.6) {
        computerChoice = 'scissors'
    } else if (computerRandomNumber <= 0.8) {
        computerChoice = 'lizard'
    } else { computerChoice = 'spock' }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
    // Add 'seleted' styling & computerChoice
    switch(computerChoice){
        case 'rock':
            computerRock.classList.add("selected")
            computerChoiceEl.textContent = " ——— Rock"
            break
        case 'paper':
            computerPaper.classList.add("selected")
            computerChoiceEl.textContent = " ——— Paper"
            break
        case 'scissors':
            computerScissors.classList.add("selected")
            computerChoiceEl.textContent = " ——— Scissors"
            break
        case 'lizard':
            computerLizard.classList.add("selected")
            computerChoiceEl.textContent = " ——— Lizard"
            break
        case 'spock':
            computerSpock.classList.add("selected")
            computerChoiceEl.textContent = " ——— Spock"
            break
        default:
            break
    }
}

// Check result, increase scores, update resultText
function updateScore(playerChoice) {
    if(playerChoice === computerChoice) {
        resultText.textContent = "It's a tie."
    } else {
        const choice = choices[playerChoice]
        if ( choice.defeats.indexOf(computerChoice) > -1 ) {
            import('./confetti.js')
                .then((module) => {
                    module.startConfetti()
                    resultText.textContent = "You Won!"
                    playerScoreNumber++
                    playerScoreEl.textContent = playerScoreNumber
                });
            
        } else {
            resultText.textContent = "Your Lost!"
            computerScoreNumber++
            computerScoreEl.textContent = computerScoreNumber
        }
    }
}

// Call functions to process turn
function checkResult(playerChoice) {
    resetSelected()
    computerRandomChoice()
    displayComputerChoice()
    updateScore(playerChoice)
}

// Passing player selection value and styling icons
function select(playerChoice) {
    checkResult(playerChoice)
    // Add 'seleted' styling & playerChoice
    switch(playerChoice){
        case 'rock':
            playerRock.classList.add("selected")
            playerChoiceEl.textContent = " ——— Rock"
            break
        case 'paper':
            playerPaper.classList.add("selected")
            playerChoiceEl.textContent = " ——— Paper"
            break
        case 'scissors':
            playerScissors.classList.add("selected")
            playerChoiceEl.textContent = " ——— Scissors"
            break
        case 'lizard':
            playerLizard.classList.add("selected")
            playerChoiceEl.textContent = " ——— Lizard"
            break
        case 'spock':
            playerSpock.classList.add("selected")
            playerChoiceEl.textContent = " ——— Spock"
            break
        default:
            break
    }
}
window.select = select



