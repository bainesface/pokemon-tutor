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
  this.name = name;
  this.hitPoints = 100;
  this.sound = sound;
  this.move = move;
  this.attackDamage = attackDamage;
  this.type = type;
}

Pokemon.prototype.talk = function () {
  return this.sound;
};

Pokemon.prototype.useYourMoves = function () {
  return this.move;
};

function Trainer(name) {
  this.name = name;
  this.pokedex = [];
}

Trainer.prototype.catch = function (pokemon) {
  this.pokedex.push(pokemon);
};

function Battle(trainer1, trainer2) {
  this.trainer1 = trainer1;
  this.trainer2 = trainer2;
  this.pokemon1 = trainer1.pokedex[0];
  this.pokemon2 = trainer2.pokedex[0];
  this.turn = 'pokemon1';
}

Battle.prototype.fight = function () {
  if (this.turn === 'pokemon1') {
    this.turn = 'pokemon2';
    return (this.pokemon2.hitPoints -= this.pokemon1.attackDamage);
  } else {
    this.turn = 'pokemon1';
    return (this.pokemon1.hitPoints -= this.pokemon2.attackDamage);
  }
};

module.exports = { Pokemon, Trainer, Battle };
