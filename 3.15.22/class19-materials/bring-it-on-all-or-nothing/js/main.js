// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let dance = false;

alert(dance);

// Declare a variable, reassign it to your favorite color, and console log the value
let bring;

bring = 'red';
console.log(bring);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function sum(a, b, c, d) {
    let sum;

    console.log(sum = a + b + c / d);
}

sum(20, 10, 5, 2);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function powerOf(a, b) {
    let power = Math.pow(a, b)

    console.log(power)
}

powerOf(5, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function boonL(a, b) {
    // if (a) {
    //     alert('True')
    // } else {
    //     alert('False')
    // }

    a ? alert(b) : console.log(b)
}

boonL('', 'word');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number


function fizzBuzz(a) {
    for (let i = 1; i <= a; i++) {
        if (a % 3 === 0 && a % 5 === 0) {
            console.log('fizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(9);


let thisArray = [22, 22, 22, 2, 22, 22, 22];


console.log(thisArray.length)