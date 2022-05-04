//Create an a class and extend it - Can be anything you would like it to be! 

class Hero {
    constructor(name) {
        this.name = name
    }
    shout() {
        console.log(`My name is ${this.name}`)
    }
}

let Ryu = new Hero('Ryu')

console.log(Ryu.shout())


class Monster extends Hero {
    constructor(name, type) {
        super(name),
            this.type = type
    }
}

let ogre = new Monster('Ogre', 'Ogre')

console.log(ogre.shout())