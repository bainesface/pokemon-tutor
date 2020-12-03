const Pokemon = require('./pokemon-solo');

describe('Pokemon', () => {
  it('Pokemon constructor returns a new instance object', () => {
    const myPokemon = new Pokemon();
    expect(myPokemon).toBeInstanceOf(Pokemon);
  });
  it('Pokemon has a name property initialised to value of first arg ', () => {
    const myPokemon = new Pokemon('Jigglypuff');
    expect(myPokemon.name).toBe('Jigglypuff');
  });
  it('has a hit points property, with a default of 10', () => {
    const myPokemon = new Pokemon('Jigglypuff');
    expect(myPokemon.hitPoints).toBe(10);
    const myPokemon2 = new Pokemon('Jigglypuff', 15);
    expect(myPokemon2.hitPoints).toBe(15);
  });
  it('returns an new instance with attack damage with default of 2', () => {
    const myPokemon = new Pokemon('Jigglypuff');
    expect(myPokemon.attackDamage).toBe(2);
    const myPokemon2 = new Pokemon('Jigglypuff', 10, 3);
    expect(myPokemon2.attackDamage).toBe(3);
  });
});
