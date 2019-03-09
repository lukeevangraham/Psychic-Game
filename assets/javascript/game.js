// APP RANDOMLY PICKS A LETTER
var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = chars[Math.floor(Math.random() * chars.length)];
console.log(randomLetter);

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

// DISPLAY THE WINS COUNTER
var winsDiv = document.getElementById("wins-div");
winsDiv.textContent = "Wins: " + wins;

// DISPLAY THE LOSSES COUNTER
var lossesDiv = document.getElementById("losses-div");
lossesDiv.textContent = "Losses: " + losses;

// DISPLAY THE GUESSES LEFT COUNTER
var guessesLeftDiv = document.getElementById("guessesLeft-div");
guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

// DISPLAY THE CURRENT GUESSES
var guessesDiv = document.getElementById("guesses-div");
guessesDiv.textContent = "Your Guesses so far: ";


    // USER GUESSES WHICH LETTER THE APP CHOSE

    // This function runs whenever the user presses a key.
    document.onkeyup = function(event) {

        if (guesses.length < 8) {

            var userGuess = event.key;
            var lowUserGuess = userGuess.toLowerCase();
        guesses.push(lowUserGuess);

        // console.log(guesses);
        // console.log(guesses.length);

        // DRCREASE GUESSLEFT COUNTER
            guessesLeft--;
            guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

        //  DISPLAY ENTERED GUESSES
        guessesDiv.textContent = "Your Guesses so far: " + guesses;

            if (guesses[guesses.length - 1] === randomLetter) {
                console.log("YOU WIN!");
                wins++;
                winsDiv.textContent = "Wins: " + wins;
                guesses = [];
                guessesLeft = 9;
                guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

                // CLEAR THE GUESSES SO FAR
                guessesDiv.textContent = "Your Guesses so far: ";

                // PICK NEW RANDOM LETTER
                randomLetter = chars[Math.floor(Math.random() * chars.length)];

            }
            
        } else {
            console.log("YOU LOSE");
            losses++;
            lossesDiv.textContent = "Losses: " + losses;
            guesses = [];
            guessesLeft = 9;
            guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

            // CLEAR THE 'GUESSES SO FAR'
            guessesDiv.textContent = "Your Guesses so far: ";

            //PICK NEW RANDOM LETTER
            randomLetter = chars[Math.floor(Math.random() * chars.length)];
        }
        
    // }
    
}
