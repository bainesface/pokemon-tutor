function Pokemon(name, hitPoints = 10, attackDamage = 2) {
  this.name = name;
  this.hitPoints = hitPoints;
  this.attackDamage = attackDamage;
}

module.exports = Pokemon;
