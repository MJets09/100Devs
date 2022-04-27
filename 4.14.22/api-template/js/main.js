//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
                // if (data.media_type === "image") {
                //     document.querySelector('img').src = data.hdurl
                // } else if (data.media_type === 'video') {
                //     document.querySelector('iframe').src = data.url
                // } else {
                //     alert('Media Not Supported - Contact NASA IMMEDIATLY')
                // }
            document.querySelector('h3').innerText = data.desc
            document.querySelector('h2').innerHTML = data.school.name

            data.subclasses.forEach(x => {
                console.log(x.name)
                const li = document.createElement('li');
                li.textContent = x.name
                document.querySelector('ul').appendChild(li)
            })

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


let myObj = {
    name: 'Meng',
    town: 'Saint Paul'
}

let myObjs = {
    name: 'Thao',
    town: 'Mpls'
}


let thisArray = [myObj, myObjs]

console.log(thisArray)

console.log(thisArray.forEach(x => console.log(x.name)))