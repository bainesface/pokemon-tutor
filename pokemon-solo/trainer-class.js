class Trainer {
  constructor(name) {
    this.name = name;
    this.pocket = {};
  }

  catch(pokemon) {
    const pokeKey = Object.keys(this.pocket).length + 1;
    this.pocket[pokeKey] = pokemon;
  }
}

module.exports = Trainer;
