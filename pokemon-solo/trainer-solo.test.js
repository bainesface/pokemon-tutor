const Trainer = require('./trainer-solo');
const { Pokemon } = require('./pokemon-solo');

describe('Trainer', () => {
  it('returns a new instance of a Trainer which has a name property', () => {
    const myTrainer = new Trainer('Sandy');
    const myPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );
    myTrainer.catch(myPokemon);
    expect(myTrainer).toBeInstanceOf(Trainer);
    expect(myTrainer.name).toBe('Sandy');
  });
  it('has a pocket property which is an empty object', () => {
    const myTrainer = new Trainer('Sandy');
    const myPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );
    myTrainer.catch(myPokemon);
    expect(myTrainer.pocket).toEqual({});
  });
  describe('methods', () => {
    describe('catch', () => {
      it('has a catch method which adds a Pokemon instance to the pocket object', () => {
        const myTrainer = new Trainer('Sandy');
        const myPokemon = new Pokemon(
          'Jigglypuff',
          10,
          3,
          'meow',
          'scratch',
          'fire'
        );
        myTrainer.catch(myPokemon);
        console.log(myTrainer.pocket);
        expect(myTrainer.pocket[1].name).toBe('Jigglypuff');
      });
    });
  });
});
