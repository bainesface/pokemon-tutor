//fire > grass
//water > fire
//grass > water
class Pokemon {
  constructor(
    name,
    hitPoints = 10,
    attackDamage = 2,
    sound,
    move,
    type = 'normal'
  ) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.move = move;
    this.type = type;
    this.strength = 'none';
    this.weakness = 'none';
  }

  setStrAndWeak(type) {
    this.strength = strengthsAndWeaknesses[type].strength;
    this.weakness = strengthsAndWeaknesses[type].weakness;
  }

  talk() {
    return this.sound;
  }
  useYourMoves() {
    return this.move;
  }
}

const strengthsAndWeaknesses = {
  grass: { strength: 'water', weakness: 'fire' },
  water: { strength: 'fire', weakness: 'grass' },
  fire: { strength: 'grass', weakness: 'water' },
};

// Pokemon.prototype.talk = function () {
//   return this.sound;
// };

// Pokemon.prototype.useYourMoves = function () {
//   return this.move;
// };

module.exports = { Pokemon };
