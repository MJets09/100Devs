// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide() {
//     document.querySelector('#claire').style.display = 'none'
//     document.querySelector('#sharleen').style.display = 'none'
// }


document.querySelector('#finalRose').addEventListener('click', Rose)

let claire = document.querySelector('#claire');
let nikki = document.querySelector('#nikki');
let sharleen = document.querySelector('#sharleen');



function Rose() {
    claire.style.display = 'none';
    sharleen.style.display = 'none';
    nikki.style.cssText =
        `border-radius:50%;
        width:300px;
        height:300px`
}