function Trainer(name) {
  this.name = name;
  this.pocket = [];
}

Trainer.prototype.catch = function (pokemon) {
  this.pocket.push(pokemon);
};

module.exports = Trainer;
