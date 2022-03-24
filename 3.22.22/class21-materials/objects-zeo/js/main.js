//Create a stopwatch object that has four properties and three methods

let stopwatch = {
    color: 'black',
    shape: 'circle',
    brand: 'Time',
    material: 'Rubber',
}

stopwatch.start = function() {
    console.log('starting')
}

stopwatch.stop = function() {
    console.log('stoppping')
}

stopwatch.sayBrand = function() {
    console.log('stopwatch.brand')
}

function calculateArea(r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}


let thisArea = calculateArea(4);

console.log(thisArea)

let heroes = [2, 5, 7];

let newHeroes = heroes.forEach((x) => z = x);

console.log(z)