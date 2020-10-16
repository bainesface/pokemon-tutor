class Pokemon {
  constructor(name, sound, move, attackDamage) {
    this.name = name;
    this.hitPoints = 100;
    this.sound = sound;
    this.move = move;
    this.attackDamage = attackDamage;
    this.type = "normal";
  }

  talk() {
    return this.sound;
  }

  useYourMoves() {
    return this.move;
  }
}

class FirePokemon extends Pokemon {
  constructor(name, sound, move, attackDamage) {
    super(name, sound, move, attackDamage);
    this.type = "fire";
    this.strength = "grass"
    this.weakness = "water"
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, sound, move, attackDamage) {
    super(name, sound, move, attackDamage);
    this.type = "grass";
    this.strength = "water"
    this.weakness = "fire"
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, sound, move, attackDamage) {
    super(name, sound, move, attackDamage);
    this.type = "water";
    this.strength = "fire"
    this.weakness = "grass"
  }
}

module.exports = { Pokemon, FirePokemon, GrassPokemon, WaterPokemon };
