// //Create a function that grabs the number of snacks from the input 
// and tells you to stop that many times

document.querySelector('#help').addEventListener('click', snacks)

function snacks() {
    let inputV = document.querySelector('input').value;

    for(let i = 0; i <= inputV; i++){
        console.log('Stop')
        i++
    }
}