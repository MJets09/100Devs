//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let movies = ['GoT', 'Shaolin Temple', 'Jackie Chan Adventures'];

movies.forEach(element => console.log(element));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays


let nums = [1, 2, 3, 4, 5];

let evenNums = nums.filter(num => num % 2 === 0)

console.log(evenNums)
    //Create a function that takes in an array of numbers
    //Alert the sum of the second lowest and the second highest number

function sum(arr) {
    let sorted = arr.sort((a, b) => a - b)
}