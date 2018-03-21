var wins, losses, guesses, lettersGuessed;
wins = 0;
losses = 0;
guesses = 9;
// array of words
var words = ["cat", "dog", "monkey", "cow", "hamster","pig","hippo","rhino","horse","girraffee","seal"];
//computer generates random word from an array of words, array length is 5
var computerPick = words[Math.floor(Math.random() * 11)];
console.log(computerPick);
var blanks = "_";
var blanksArray = [];
var userGuessArray = [];
//this will loop as many times as the length of the word the computer picked
//each time it loops we get an underscore in our array
//by the end of the loop the number of underscores is the same as the length of the word the computer picked
for (var i = 0; i < computerPick.length; i++) {
    blanksArray.push(blanks);
}
//this prints our array of underscores to the screen under "word to guess"
$("#word-blanks").text(blanksArray.join(""));

document.onkeyup = function (event) {
    //takes value of the key user enters
    var userGuess = event.key;
    // we need access to each letter of the word that computer guessed 
    userGuessArray.push(userGuess);
    $("#wrong-guesses").text(userGuessArray);
    var checkIndex = computerPick.indexOf(userGuess);
    if (checkIndex != -1) {
        blanksArray[checkIndex] = userGuess;
        // replace the html index of the letter with the user guess
        $("#word-blanks").text(blanksArray.join(""));
        if (blanksArray.join("") === computerPick) {
            wins = wins + 1;
            $("#win-counter").text(wins);
            reset();
        }
    }
    else {
        guesses = guesses - 1;
        $("#guesses-left").text(guesses);
        if (guesses === 0) {
            //increment losses
            losses = losses + 1;
            $("#loss-counter").text(losses);
            // reset guesses to 9 
            reset();
        }
    }
    function reset() {
        guesses = 9;
        $("#guesses-left").text(guesses);
        // new word 
        computerPick = words[Math.floor(Math.random() * 5)];
        //empty array
        blanksArray = [];
        //empty user entry values array
        userGuessArray = [];
        $("#wrong-guesses").text(userGuessArray);
        // console.log(userGuessArray);
        for (var i = 0; i < computerPick.length; i++) {

            blanksArray.push(blanks);
        }
        $("#word-blanks").text(blanksArray.join(""));
    }
};
