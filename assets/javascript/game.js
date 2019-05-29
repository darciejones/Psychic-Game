
var letters = ["a", "e", "i", "o", "u"]; 
var lettersPicked = []; // stores what was picked

var lettersToPick = null;
var guessesLeft = 4;

var wins =0;   //counter for wins and losses 
var losses =0;


//html element set equal to the Guesses Left 
var remainingGuessesLeft = function() {

    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

// random letters to pick from based on random generator with math and floor
var updateLettersToPick = function() {
    lettersToPick = letters[Math.floor(Math.random() * letters.length)];
};

// using the guess the user entered and dispalying it as string
var updateGuesses = function() {
    document.querySelector("#guesses-so-far").innerHTML = lettersPicked.join(",");
};

//resetting with a function

var reset = function() {
    guessesLeft = 4;
    lettersPicked = [];
    updateLettersToPick();
   remainingGuessesLeft(); // remaining guesses left function 
    updateGuesses(); // update guesses funtion displaying guesses so far and then the joined string of chosen letters

};


//loading the page and recognizing keyboard. Using Lower Case
// if statement checking if letter matches the letter 
updateLettersToPick();
remainingGuessesLeft();

document.onkeydown = function(event) {
    guessesLeft--;

    var letter =event.key.toLowerCase();

    lettersPicked.push(letter);

    updateLettersToPick();
    remainingGuessesLeft(); 

    if (letter === lettersToPick) {

        wins++; //increment wins
        document.querySelector("#wins").innerHTML = wins;

        reset();

    }

    //if guesses left is out

    if (guessesLeft ===0) {

        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }







}; 
