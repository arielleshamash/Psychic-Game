
//array for computer choice options (entire alphabet--don't worry I didn't type this all out by hand, I copy/pasted from internet)
var computerChoices= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//variables for user stats
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//array for previous user guesses
var previousGuess = [];

//randomly calculating computer's choice
var computerGuess;


//funtion run when user chooses a letter
document.onkeyup = function(event) {  

    var userGuess = event.key;

if (previousGuess.length === 0) {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("The answer is " + computerGuess);
    }
    previousGuess.push(userGuess);



    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



if (letters.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            previousGuess = [];
            guessesLeft = 9;
            
            }

        if (userGuess !== computerGuess) {
            guessesLeft--;
            previousGuess.push();
            
            }    

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            previousGuess = [];
            }

        var html =
            "<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + previousGuess.join(", ") + "</p>";
            
            document.querySelector("#game").innerHTML = html;

        }

}

