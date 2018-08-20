//Solutions
var womenInTech = [
    "Ellen Pao",
    "Grace Hopper",
    "Hedy Lamarr",
    "Radia Joy Perlman",
]

// using above array we choose a random word.
var Solution = womenInTech[Math.floor(Math.random() * womenInTech.length)];
console.log(womenInTech)

//User Answers
var userGuess = []
//TotalWins
var wins = 0
//TotalAttempts 
var maxWrong = 9

//Let the game begin 
