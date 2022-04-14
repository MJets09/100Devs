// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = 'Powerade especially da blue one';

let favDrinks = favDrink.trim();

console.log(favDrinks);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let str = 'Orange, Bananas, and Apples are great fruits';

console.log(str.search('Apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function golemScizorKatakuri() {
    let random = Math.random();

    if (random < .33) {
        return 'Scizor'
    } else if (random < .66) {
        return 'Golem'
    } else {
        return 'Katakuri'
    }
}

// console.log(golemScizorKatakuri())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function winnar(choice) {
    // let choice = prompt('Golem, Scizor or Katakuri?').value;
    let botChoice = golemScizorKatakuri();

    // console.log(botChoice);


    if ((choice === 'Scizor' && botChoice === 'Katakrui') || (choice === 'Katakuri' && botChoice === 'Golem') || (choice === 'Golem' && botChoice === 'Scizor')) {
        console.log('Winnar')
    } else {
        console.log('You LOST')
    }
}

// winnar(prompt('Scizor, Golem or Katakuri?'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

let myArr = ['Scizor', 'Scizor', 'Golem'];

function playGame(arr) {
    myArr.forEach((x => winnar(x)));
}

(playGame(myArr))