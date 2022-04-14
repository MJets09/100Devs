//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function createSkater(name, board, pads, helmet, drunk, falling, rolling) {
    this.name = name,
        this.board = board,
        this.pads = pads,
        this.helmet = helmet,
        this.drunk = function() {
            alert('Drunnkk')
        },
        this.falling = function() {
            alert('Fallinggg')
        },
        this.rolling = function() {
            alert(`Let me roll on my ${this.board}`)
        }
}


let roy = new createSkater('Roy', 'FireHawk', false, false)

console.log(roy)

roy.rolling();