class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = trainer1.pokedex[0];
    this.pokemon2 = trainer2.pokedex[0];
    this.turn = "pokemon1";
  }

  fight() {
    if (this.turn === "pokemon1") {
      this.turn = "pokemon2";
      return (this.pokemon2.hitPoints -= this.pokemon1.attackDamage);
    } else {
      this.turn = "pokemon1";
      return (this.pokemon1.hitPoints -= this.pokemon2.attackDamage);
    }
  };
}

module.exports = Battle

/*
- The fight method should take each pokemon's strengths and weaknesses into account. If a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75. If a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.
- Each attack should be followed by an attack message. The message will vary depending on the defender's weakness/strength.
- If the defending pokemon faints (depletes all hit points), the attacker wins.
*/ 