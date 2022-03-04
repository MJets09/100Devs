//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?


function twentyOne() {
    let twenty = 1;
    let twentySay = document.querySelector('h2');


    for(let i = 1; i <= 21; i++){
        twentySay.innerHTML += '\n21';
        console.log(i)
    }

    // while(twenty < 21){
    //     twentySay.innerHTML = '21';
    //     twenty++
    // }
}

twentyOne()