//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class Machine {
    constructor(name, height, occupation, soul) {
        this.name = name,
            this.height = height,
            this.occupation = occupation,
            this.soul = soul
    }
    jogging() {
        return `${this.name} is jogging`
    }
    walk() {
        return `${this.name} is walking`
    }
    sprinting() {
        return `${this.name} is sprinting`
    }

}

let legion = new Machine('Legion', '6\'8', `Sniper`, true)

console.log(legion)
console.log(legion.jogging())

function isTruthy(x) {
    return x ? true : false;
}

console.log(isTruthy(''))