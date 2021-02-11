function Battle(trainerA, trainerB) {
  this.trainerA = trainerA;
  this.trainerB = trainerB;

  this.pokemonA = this.trainerA.pocket[1];
  this.pokemonB = this.trainerB.pocket[1];
}

module.exports = Battle;
