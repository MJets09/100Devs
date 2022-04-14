//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class Netflix {
    constructor(Title, Genre, Rating, Year) {
        this.Title = Title,
            this.Genre = Genre,
            this.Rating = Rating,
            this.Year = Year
    }
    playing() {
        console.log('Now playing')
    }
    skip() {
        console.log('Now skipping')
    }
    next() {
        console.log('Skipping episode')
    }
}

let curb = new Netflix('Curb Your Enthuisiam', 'Comedy', '*****', 2008);

console.log(curb.Title)