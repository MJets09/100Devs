// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext() {
//     claire.classList.add('hidden')
//     sharleen.classList.add('hidden')
//     andi.classList.toggle('hidden')
// }

// function claireNext() {
//     claire.classList.toggle('hidden')
//     sharleen.classList.add('hidden')
//     andi.classList.add('hidden')
// }

// function sharleenNext() {
//     claire.classList.add('hidden')
//     sharleen.classList.toggle('hidden')
//     andi.classList.add('hidden')
// }

// Going to click on the h2
document.querySelector('#andiNext').addEventListener('click', andiNext);
document.querySelector('#claireNext').addEventListener('click', claireNext);
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext);
// image is going to show


let andi = document.querySelector('#andi');
let clarie = document.querySelector('#claire');
let sharleen = document.querySelector('#sharleen');

function andiNext() {
    andi.classList.toggle('hidden');
    clarie.classList.add('hidden');
    sharleen.classList.add('hidden');
}

function claireNext() {
    andi.classList.add('hidden');
    clarie.classList.toggle('hidden');
    sharleen.classList.add('hidden');
}

function sharleenNext() {
    andi.classList.add('hidden');
    clarie.classList.add('hidden');
    sharleen.classList.toggle('hidden');
}


function addSum(a, b) {
    return a + b;
}

function multiply(a, b, c) {
    return a * b * c;
}

function divide(a, b) {
    return a / b;
}