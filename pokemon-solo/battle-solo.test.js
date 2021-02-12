// const Battle = require('./battle-solo');
// const Trainer = require('./trainer-solo');
// const { Pokemon } = require('./pokemon-solo');
const Battle = require('./battle-class');
const Trainer = require('./trainer-class');
const { Pokemon } = require('./pokemon-class');
let consoleSpy = null;

beforeEach(function () {
  consoleSpy = jest.spyOn(console, 'log');
});

afterEach(function () {
  consoleSpy.mockRestore();
});

describe('Battle', () => {
  it('has a trainerA property which is an instance of Trainer', () => {
    const trainerA = new Trainer('A');
    const trainerB = new Trainer('B');

    const myPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );
    trainerA.catch(myPokemon);
    const myPokemonB = new Pokemon(
      'Pigglypuff',
      10,
      3,
      'woof',
      'bite',
      'grass'
    );
    trainerB.catch(myPokemonB);
    const myBattle = new Battle(trainerA, trainerB);
    expect(myBattle.trainerA.name).toBe('A');
  });
  it('has a trainerB property which is an instance of Trainer', () => {
    const trainerA = new Trainer('A');
    const trainerB = new Trainer('B');
    const myPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );
    trainerA.catch(myPokemon);
    const myPokemonB = new Pokemon(
      'Pigglypuff',
      10,
      3,
      'woof',
      'bite',
      'grass'
    );
    trainerB.catch(myPokemonB);
    const myBattle = new Battle(trainerA, trainerB);
    expect(myBattle.trainerB.name).toBe('B');
  });
  it('has a pokemonA property which is the first pokemon in the trainers pocket', () => {
    const trainerA = new Trainer('A');
    const myPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );
    trainerA.catch(myPokemon);
    const trainerB = new Trainer('B');
    const myPokemonB = new Pokemon(
      'Pigglypuff',
      10,
      3,
      'woof',
      'bite',
      'grass'
    );
    trainerB.catch(myPokemonB);
    const myBattle = new Battle(trainerA, trainerB);
    expect(myBattle.pokemonA.name).toBe('Jigglypuff');
  });
  it('has a pokemonB property which is the first pokemon in trainerBs pocket', () => {
    const trainerA = new Trainer('A');
    const myPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );
    trainerA.catch(myPokemon);
    const trainerB = new Trainer('B');
    const myPokemonB = new Pokemon(
      'Pigglypuff',
      10,
      3,
      'woof',
      'bite',
      'grass'
    );
    trainerB.catch(myPokemonB);
    const myBattle = new Battle(trainerA, trainerB);
    expect(myBattle.pokemonB.name).toBe('Pigglypuff');
  });
  describe('methods', () => {
    describe('fight', () => {
      it('deducts the attackers attack damage from the defenders hit points and sends a message saying what the new stats are and ends the turn (normal-normal)', () => {
        const trainerA = new Trainer('A');
        const myPokemon = new Pokemon('Jigglypuff', 10, 2, 'meow', 'scratch');
        trainerA.catch(myPokemon);
        const trainerB = new Trainer('B');
        const myPokemonB = new Pokemon('Pigglypuff', 10, 3, 'woof', 'bite');
        trainerB.catch(myPokemonB);
        const myBattle = new Battle(trainerA, trainerB);
        myBattle.fight();
        expect(myPokemonB.hitPoints).toBe(8);
        expect(consoleSpy).toHaveBeenCalledWith(
          "Uh oh, Pigglypuff's hit points are now 8"
        );
        expect(myBattle.round).toBe(1);
      });
      it('does the same as above for the second pokemon in the second invocation of the fight method (normal-normal)', () => {
        const trainerA = new Trainer('A');
        const myPokemon = new Pokemon('Jigglypuff', 10, 2, 'meow', 'scratch');
        trainerA.catch(myPokemon);
        const trainerB = new Trainer('B');
        const myPokemonB = new Pokemon('Pigglypuff', 10, 3, 'woof', 'bite');
        trainerB.catch(myPokemonB);
        const myBattle = new Battle(trainerA, trainerB);
        myBattle.fight();
        myBattle.fight();
        expect(myPokemon.hitPoints).toBe(7);
        expect(consoleSpy).toHaveBeenCalledWith(
          "Uh oh, Jigglypuff's hit points are now 7"
        );
        expect(myBattle.round).toBe(2);
      });
    });
  });
});
