let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (score1, score2) => {
    return Math.abs(score1-score2);
}
const compareGuesses = (humanGuess, computerGuess, guess = generateTarget()) => {
    humanDistance = getAbsoluteDistance(humanGuess, guess);
    computerDistance = getAbsoluteDistance(computerGuess, guess);
    if (humanGuess > 9) {
        alert('Number is out of range!');
    }
    return humanDistance<=computerDistance;
}

const updateScore = (winner) => {
    (winner === 'human')?humanScore++:computerScore++;
}

const advanceRound = () => {
    return currentRoundNumber++;
}

