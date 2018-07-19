// create a array of words
    const word = ["thor", "ironman", "spiderman", "antman", "thanos", "blackwidow", "starlord", "groot", "loki", "hawkeye", "hulk", "ultron", "gamora", "vision", "rocket", "drax", "blackpanther"]
// choose word randomly
    var randNum = Math.floor(Math.random() * word.length);
    var choosenWord = word[randNum];
    console.log(choosenWord);
    // var to create an array for underscore push
    var underScore = [];
//create underscores based on length of word 
var genUnderscore = () => {
    for(var i = 0; i < choosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}
console.log(genUnderscore());
//get users guess

//chec if guess is right 
//if right push to right array
//if wrong push to wrong array
