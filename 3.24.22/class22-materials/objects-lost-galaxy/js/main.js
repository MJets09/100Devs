//Create a mouse object that has four properties and three methods

let mouse = {
    size: 'Large',
    color: "Red/Black",
    wheel: true,
    brand: 'Logitech',
    click: function() {
        alert('Click')
    },
    leftClick: function() {
        alert('leftClick')
    },
    tap: function() {
        alert('Tap')
    }
}


let arr = [4, 6, 8, 10];


let lastItem = arr[arr.length - 1];

console.log(lastItem);

function reverseStr(string) {
    let reverse = string.split(' ');

    console.log(reverse)
}

reverseStr('Kevin Garnett')


let KG = 'Kevin Garnett';

console.log(KG.search('Garnett'))