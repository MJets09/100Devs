//Create an array of movies with at least three movies.
let movies = ['Inception', 'Red Cliff', 'Djangoooo'];
//Using the array from above, store the first movie in a variable
let Inception = movies[0];

//Get the length of the original array and store it in a new variable
let arrLength = movies.length;

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastEle = movies[movies.length - 1];

movies.forEach((x, i, r) => console.log(x, i, r))