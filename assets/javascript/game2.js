

var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = []
var userGuesses = [];
var randWord; 
const wordBank = ["thor", "ironman", "spiderman", "antman", "thanos", "blackwidow", "starlord", "groot", "loki", "hawkeye", "hulk", "ultron", "gamora", "vision", "rocket", "drax", "blackpanther"]

//function to start game
function startGame() {
//picks randomword
randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randWord)


    for (var i = 0; i < randWord.length; i++)
     {
        underScores.push("_");
    }
 document.getElementById("word-blanks").textContent = underScores.join(" ");  

        //reset
    wrongLetter = [];
    guessesLeft = 10;

    //html
    document.getElementById("guesses-left").textContent = guessesLeft;
}

document.onkeyup = function(event)
{
userGuesses = event.key;
console.log(userGuesses);

if(randWord.indexOf(userGuesses) > -1)
{
    console.log("yes");
}
else{
    wrongLetter.push(userGuesses);
    guessesLeft--;
    console.log(guessesLeft);
}






}
startGame()