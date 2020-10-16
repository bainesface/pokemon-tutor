class Trainer {
  constructor(name) {
    this.name = name;
    this.pokedex = [];
  }
  catch(pokemon) {
    this.pokedex.push(pokemon);
  }
}

module.exports = Trainer;
