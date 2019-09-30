let wins = 0;
let guesses = 7;
let losses = 0;
let computerGuess;

//make an array for the player and computer to guess
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//make array of user guesses
let guessed = []

//reset function - keep track of wins/losses, reset guesses to 0
function reset() {
    guessed = [];
    guesses = 7;
    //select random letter for the computer
    let computerGuessIndex = Math.floor(Math.random() * letters.length);
    computerGuess = letters[computerGuessIndex];
    console.log("Game reset, Computer chose: " + computerGuess);
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
        reset();
    } else {
        guesses--
        guessed.push(userGuess);
        if (guesses === 0) {
            losses++
            reset()
        }
    }
    console.log("Wins: " + wins, "Guesses: " + guesses, "Losses: " + losses, "Guessed letters: " + guessed);
}

// //figure out how to give the user 7 guesses and make it lose after the 7th incorrect guess (for loop and else statement)
