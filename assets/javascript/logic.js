// GLOBAL VARIABLES 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ARRAYS AND VARIABLES FOR HOLDING DATA

console.log ("test");

var wordOptions = [
	"mustang",
    "ferrari",
    "chevrolet",
    "toyota",
    "honda",
    "jeep",
    "mercedes",
    "bmw",
    "porsche",
    "infinity",
    "cadillac",
    "lamborghini",
    "lexus",
    "mazda"
    ];
    var selectedWord = "";
    var lettersInWord = [];
    var numBlanks = "0";
    var blanksAndSuccesses = [];
    var wrongLetters = [];

    var winCount = "0";
    var losscount ="0";
    var guessesLeft = "9";


//FUNCTIONS (Reusable blocks of code that I will call upom when needed)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 function startGame () {
 	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

 	console.log(selectedWord);
 	
 };
//MAIN PROCESSES (Call upon the functions to make something happen)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 



