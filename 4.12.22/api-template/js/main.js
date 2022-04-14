//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=rTBTxonHYjhvxlRa7KyLrfGc4sY4T975LDgySFEP&date=${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            if (data.media_type === 'image') {
                document.querySelector('img').src = data.url
            } else if (data.media_type = 'video') {
                document.querySelector('iframe').src = data.url
            }
            document.querySelector('img').src = data.url
            document.querySelector('h2').innerHTML = data.title
            document.querySelector('p').innerHTML = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}