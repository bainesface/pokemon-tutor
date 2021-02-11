const Battle = require('./battle-solo');
const Trainer = require('./trainer-solo');
const { Pokemon } = require('./pokemon-solo');

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
});
