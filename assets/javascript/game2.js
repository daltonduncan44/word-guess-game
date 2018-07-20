

var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = []
var userGuesses = [];
var randWord; 
const wordBank = ["thor", "ironman", "spiderman", "antman", "thanos", "blackwidow", "starlord", "groot", "loki", "hawkeye", "hulk", "ultron", "gamora", "vision", "rocket", "drax", "blackpanther"]
var winCounter = 0;
//function to start game
function startGame() {
//picks randomword
randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randWord);


    for (var i = 0; i < randWord.length; i++)
     {
        underScores.push("_");
    }
    //pringting underscores to the screen
 document.getElementById("word-blanks").textContent = underScores.join(" ");  

        //reset
    wrongLetter = [];
    guessesLeft = 10;

    //html
    document.getElementById("guesses-left").textContent = guessesLeft;
}

function winLose()
{
    if(winCounter === randWord.length)
    {
        alert("Winner He Wont Snap")
    }
    else if(guessesLeft === 0)
{
    alert("SNAP!!!!")
}
    
}

//the guess gets recieved
document.onkeyup = function(event)
{
userGuesses = event.key;
//checks if the guess is inside the word
console.log(userGuesses);

if(randWord.indexOf(userGuesses) > -1)
{
    console.log("yes");
    for(var i = 0; i < randWord.length; i++)
    {
        //winning senerio
        if(randWord[i] === userGuesses)
        {
            underScores[i] = userGuesses;
            console.log(underScores);
            winCounter++;
            winLose();
        }
    
    }
}
// losing senerio
else{
    wrongLetter.push(userGuesses);
    guessesLeft--;
    console.log(guessesLeft);
    winLose();
}






}
//the booter of the game
startGame()