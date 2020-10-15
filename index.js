//name
//hit points
//sound
//move
//attack damage
//type default to normal
//type can also be grass, water or fire
//fire > grass
//water > fire
//grass > water
function Pokemon(name, sound, move) {
this.name = name
this.hitPoints = 100
this.sound = sound
this.move =  move
}

module.exports = Pokemon