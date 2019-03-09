// APP RANDOMLY PICKS A LETTER
var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = chars[Math.floor(Math.random() * chars.length)];
console.log(randomLetter);

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = [];

// var targetDiv = document.getElementById("empty-div");
// targetDiv.textContent = "Hello Friends!";

var winsDiv = document.getElementById("wins-div").textContent = "Hello friends!";

    // USER GUESSES WHICH LETTER THE APP CHOSE

    // This function runs whenever the user presses a key.
    document.onkeyup = function(event) {

        if (guesses.length < 9) {

            var userGuess = event.key;
        guesses.push(userGuess);
        console.log(guesses);
        console.log(guesses.length);

            if (guesses[guesses.length - 1] === randomLetter) {
                console.log("YOU WIN!");
                wins++;
            }
            
        } else {
            console.log("YOU LOSE");
            losses++;
        }

        // Determines which key was pressed.
        
    // }
    
}
