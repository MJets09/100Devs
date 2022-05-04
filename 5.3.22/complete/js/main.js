class Animal {
    constructor(name, breed) {
        this._name = name
        this._breed = breed
    }
    get name() {
        return this._name
    }
    get breed() {
        return this._breed
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal {
    constructor(name, breed, spotted) {
        super(name)

    }
    speak() {
        super.speak()
        console.log(`${this.name} barks`)
    }
}
class Cat extends Animal {
    constructor(name, breed) {
        super(name)
        this._breed = breed
    }
    speak() {
        super.speak()
        console.log(`${this.name} meows`)
    }
}




let simba = new Dog('Simba', 'Shepard')
let machi = new Dog('The Machine', 'Pitbull')
let salem = new Cat('Salem', 'American Shorthair')

console.log(simba)

let farm = [simba, machi, salem]

for (a of farm) {
    a.speak()
}