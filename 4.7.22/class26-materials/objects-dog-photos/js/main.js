//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.message) //This is the data we are bringing back
        document.querySelector('img').src = data.message //Then we are attaching the data to our query selector
    })
    .catch(err => {
        console.log(`error ${err}`) //Run when not working
    });