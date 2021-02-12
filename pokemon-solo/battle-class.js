class Battle {
  constructor(trainerA, trainerB) {
    this.trainerA = trainerA;
    this.trainerB = trainerB;
    this.pokemonA = this.trainerA.pocket[1];
    this.pokemonB = this.trainerB.pocket[1];
    this.round = 0;
  }
  fight() {
    if (this.round % 2 === 0) {
      this.pokemonB.hitPoints =
        this.pokemonB.hitPoints - this.pokemonA.attackDamage;
      this.round++;
      console.log(
        `Uh oh, ${this.pokemonB.name}'s hit points are now ${this.pokemonB.hitPoints}`
      );
    } else {
      this.pokemonA.hitPoints =
        this.pokemonA.hitPoints - this.pokemonB.attackDamage;
      this.round++;
      console.log(
        `Uh oh, ${this.pokemonA.name}'s hit points are now ${this.pokemonA.hitPoints}`
      );
    }
  }
}

module.exports = Battle;
