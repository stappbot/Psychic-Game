let wins = 0;
let guesses = 7;
let losses = 0;
let computerGuess;

//$ and camel case is a convention to say you are pointing at something in html
const $guessesRemain = document.getElementById("guesses-remain")
const $lettersGuessed = document.getElementById("letters-guessed")
//insert wins and losses into html
const $wins = document.getElementById("wins")
const $losses = document.getElementById("losses")

//make an array for the player and computer to guess
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//make array of user guesses
let guessed = []

function displayResults() {
    $guessesRemain.innerText = guesses;
    $lettersGuessed.innerText = guessed;
    $wins.innerText = wins;
    $losses.innerText = losses;
}

//reset function - keep track of wins/losses, reset guesses to 0
function reset() {
    guessed = [];
    guesses = 7;
    //select random letter for the computer
    let computerGuessIndex = Math.floor(Math.random() * letters.length);
    computerGuess = letters[computerGuessIndex];
    console.log("Game reset, Computer chose: " + computerGuess);
    displayResults();
}

reset();

//function is run when user presses a key
document.onkeyup = function (event) {
    //determines which key was pressed
    var userGuess = event.key;
    //return userGuess
    console.log("user chose: " + userGuess)

    //collect results
    if (userGuess === computerGuess) {
        wins++
        //display to html page
        reset();
    } else {
        guesses--
        guessed.push(userGuess);
        displayResults();
        if (guesses === 0) {
            losses++
            reset()
        }
    }
    console.log("Wins: " + wins, "Guesses: " + guesses, "Losses: " + losses, "Guessed letters: " + guessed);
}

// //figure out how to give the user 7 guesses and make it lose after the 7th incorrect guess (for loop and else statement)
