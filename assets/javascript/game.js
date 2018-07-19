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
    var keyword = String.fromCharCode(event.keycode);
    console.log(keyword);
});
//chec if guess is right 
// if else statement to move inputs to the right array
if (keyword.indexOf(choosenWord) > -1) {

    rightWord.push(keyword);
 } else{
    wrongWord.push(keyword);
}
//if right push to right array
//if wrong push to wrong array
