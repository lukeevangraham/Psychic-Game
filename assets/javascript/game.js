// APP RANDOMLY PICKS A LETTER
var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = chars[Math.floor(Math.random() * chars.length)];
console.log(randomLetter);

// USER GUESSES WHICH LETTER THE APP CHOSE

    // This function runs whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;
        console.log(userGuess);
    }

var wins = 0;
var losses = 0;


var guessesLeft = 0;