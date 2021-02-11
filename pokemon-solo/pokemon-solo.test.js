const { Pokemon, setStrAndWeak } = require('./pokemon-solo');

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
  it('returns a new instance with attack damage with default of 2', () => {
    const myPokemon = new Pokemon('Jigglypuff');
    expect(myPokemon.attackDamage).toBe(2);
    const myPokemon2 = new Pokemon('Jigglypuff', 10, 3);
    expect(myPokemon2.attackDamage).toBe(3);
  });
  it('returns a new instance with sound and move', () => {
    const myPokemon = new Pokemon('Jigglypuff', 10, 3, 'meow', 'scratch');
    expect(myPokemon.sound).toBe('meow');
    expect(myPokemon.move).toBe('scratch');
  });
  it('returns a fire, water and grass pokemon and normal pokemon', () => {
    const myPokemon = new Pokemon('Jigglypuff', 10, 3, 'meow', 'scratch');
    expect(myPokemon.type).toBe('normal');
    const firePokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );
    expect(firePokemon.type).toBe('fire');
    const waterPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'water'
    );
    expect(waterPokemon.type).toBe('water');
    const grassPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'grass'
    );
    expect(grassPokemon.type).toBe('grass');
  });
  it('returns a pokemon with relevant strengths and weakness properties', () => {
    const grassPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'grass'
    );

    grassPokemon.setStrAndWeak(grassPokemon.type);

    expect(grassPokemon.strength).toBe('water');
    expect(grassPokemon.weakness).toBe('fire');

    const waterPokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'water'
    );

    waterPokemon.setStrAndWeak(waterPokemon.type);

    expect(waterPokemon.strength).toBe('fire');
    expect(waterPokemon.weakness).toBe('grass');

    const firePokemon = new Pokemon(
      'Jigglypuff',
      10,
      3,
      'meow',
      'scratch',
      'fire'
    );

    firePokemon.setStrAndWeak(firePokemon.type);

    expect(firePokemon.strength).toBe('grass');
    expect(firePokemon.weakness).toBe('water');
  });
  describe('methods', () => {
    describe('talk', () => {
      it("returns the pokemon's sound", () => {
        const myPokemon = new Pokemon(
          'Jigglypuff',
          10,
          3,
          'meow',
          'scratch',
          'fire'
        );
        expect(myPokemon.talk()).toBe('meow');
      });
    });
    describe('useYourMoves', () => {
      it('returns the pokemons favourite move', () => {
        const myPokemon = new Pokemon(
          'Jigglypuff',
          10,
          3,
          'meow',
          'scratch',
          'fire'
        );
        expect(myPokemon.useYourMoves()).toBe('scratch');
      });
    });
  });
});
