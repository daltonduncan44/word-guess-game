// create a array of words
const word = ["thor", "ironman", "spiderman", "antman", "thanos", "blackwidow", "starlord", "groot", "loki", "hawkeye", "hulk", "ultron", "gamora", "vision", "rocket", "drax", "blackpanther"]
// choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
console.log(choosenWord);
// var to create an array for underscore push
var underScore = [];
// car to create an array for the right choices
var rightWord = [];
//var to create an array for the wrougn choices
var wrongWord = [];
 ///dom manip
var docUnderScore = document.getElementsByClassName("underScore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess")

//create underscores based on length of word 
var genUnderscore = () => {
 for (var i = 0; i < choosenWord.length; i++) {
        underScore.push("_");
       
    }
    return underScore;
}
console.log(genUnderscore());
//get users guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keycode);
    if (choosenWord.indexOf(keyword) > -1) {
        // if else statement to move inputs to the right array
        rightWord.push(keyword);
        //re place underscores with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('  ');
        docRightGuess[0].innerHTML = rightWord;
        //checks to see if word matched the guesses
        if (underScore.join(" ") == choosenWord) {
            //alerts the winner
            alert("You are a Winner");
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});

[0].innerHTML = genUnderscore().join("  ");
