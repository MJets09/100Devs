//Write your pseduo code first! 
// Enter in value
// create a functon to do the conversion
// console.log value

let temp = document.querySelector('#temp');

function celToFaren() {
    let answer = prompt('Enter a number');
    let newTemp = answer * 1.8 + 32;

    return `The Farenheit temp is ${newTemp}`
}

temp.innerHTML = celToFaren();