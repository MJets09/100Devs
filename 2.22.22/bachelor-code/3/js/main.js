const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click) {
    if (click.target.classList.contains('rose')) {
        document.querySelector('#nikki').classList.toggle('hidden')
    } else {
        alert("Wrong!");
    }
}

// click on a name
// then see if they contain the class rose
// if so show pic otherwise say wrong

function isNegative(x) {
    console.log(x > 0 ? 'Is positive' : "Not positive")
};

isNegative(-5)

let wearingShoes = true;

if (wearingShoes = false) {
    console.log('Mans not wearing shoes');
} else {
    console.log('Nikes on my feet')
};

let balance = -20;
let isActive = true;
let checkBalance = true;

if (checkBalance == true) {
    if (isActive == true && balance > 0) {
        console.log(`Your balance is $${balance}.`)
    } else if (isActive == true && balance == 0) {
        console.log('Your account is empty.')
    } else if (balance < 0) {
        console.log('Your balance is negative. Please contact bank.')
    } else if (isActive == false) {
        console.log('Your account is no longer active.')
    }
}

var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if (flavor == 'vanilla' || flavor == 'chocolate' && vessel == 'cone' || vessel == 'bowl' && toppings == 'sprinkles' || toppings == 'peanuts') {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
} else {
    console.log()
}

let shirtWidth = '25';
let shirtLength = '28';
let shirtSleeve = '24';
let size;

if ((shirtWidth >= 0 || shirtWidth <= 18) && (shirtLength >= 0 || shirtLength <= 28) && (shirtSleeve >= 0 || shirtSleeve <= 18.3)) {
    size = 'S'
    console.log(size);
} else {
    console.log('You did it wrong')
}