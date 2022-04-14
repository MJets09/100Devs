// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink() {

//     let drink = document.querySelector('input').value;

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data) //This is the data we are bringing back
//                 // document.querySelector('img').src = data.message //Then we are attaching the data to our query selector
//             document.querySelector('h2').innerText = data.drinks[0].strDrink
//             document.querySelector('img').src = data.drinks[0].strDrinkThumb
//             document.querySelector('h3').innerText = data.drinks[0].strInstructions
//         })
//         .catch(err => {
//             console.log(`error ${err}`) //Run when not working
//         });
// }


fetch('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc') //Your API url
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data) //This is the data we are bringing back, find out what properties you need.

    })
    .catch(err => {
        console.log(`error ${err}`) //Run when not working/Errors
    });