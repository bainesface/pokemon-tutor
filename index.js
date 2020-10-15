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
function Pokemon(name, sound, move, attackDamage, type = 'normal') {
this.name = name
this.hitPoints = 100
this.sound = sound
this.move =  move
this.attackDamage = attackDamage
this.type = type
}

Pokemon.prototype.talk = function() {
    return this.sound
}

Pokemon.prototype.useYourMoves = function() {
    return this.move
}

module.exports = Pokemon