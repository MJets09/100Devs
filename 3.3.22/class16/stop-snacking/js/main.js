// //Create a function that grabs the number of snacks from the input 
// and tells you to stop that many times

document.querySelector('#help').addEventListener('click', snacks)



function snacks() {
    let inputV = document.querySelector('input').value;
    let stops = document.querySelector('#stops');
    stops.innerHTML = ''

    for (let i = 1; i <= inputV; i++) {
        console.log(inputV)
        stops.innerHTML += 'Stops';
    }
}