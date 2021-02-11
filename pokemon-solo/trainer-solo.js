function Trainer(name) {
  this.name = name;
  this.pocket = {};
}

Trainer.prototype.catch = function (pokemon) {
  const pokeKey = Object.keys(this.pocket).length + 1;
  this.pocket[pokeKey] = pokemon;
};

module.exports = Trainer;
