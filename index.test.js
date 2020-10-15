const { Pokemon, Trainer, Battle } = require('./index');

describe('Pokemon', () => {
  it('returns an instanciated object of a pokemon', () => {
    const charmander = new Pokemon();
    expect(charmander).toBeInstanceOf(Pokemon);
    expect(typeof charmander).toBe('object');
  });
  it('instanciated object has a property of name, initialised to the name of the pokemon created', () => {
    const charmander = new Pokemon('charmander');
    expect(charmander.name).toBe('charmander');
  });
  it('instanciated object has a property of hit points, initialised to 100', () => {
    const charmander = new Pokemon('charmander');
    expect(charmander.hitPoints).toBe(100);
  });
  it('instanciated object has a property of sound, initialised to a passed argument', () => {
    const charmander = new Pokemon('charmander', 'fire blast');
    expect(charmander.sound).toBe('fire blast');
  });
  it('instanciated object has a property of move, initialised to a passed move argument', () => {
    const charmander = new Pokemon('charmander', 'fire blast', 'burn');
    expect(charmander.move).toBe('burn');
  });
  it('instanciated object has a property of attackDamage, initialised to an attackDamage argument', () => {
    const charmander = new Pokemon('charmander', 'fire blast', 'burn', 10);
    expect(charmander.attackDamage).toBe(10);
  });
  it('instanciated object has a property of type, initialised to a default of normal but able to be reassigned', () => {
    const pidgy = new Pokemon('pidgy', 'sqwark', 'peck', 8);
    const charmander = new Pokemon(
      'charmander',
      'fire blast',
      'burn',
      10,
      'fire'
    );
    expect(pidgy.type).toBe('normal');
    expect(charmander.type).toBe('fire');
  });
});

describe('methods', () => {
  it('a method called talk is available', () => {
    const charmander = new Pokemon(
      'charmander',
      'fire blast',
      'burn',
      10,
      'fire'
    );
    const charmanderMethods = Object.getPrototypeOf(charmander);
    expect(typeof charmanderMethods.talk).toBe('function');
  });
  it('method talk returns the sound of charmander', () => {
    const charmander = new Pokemon(
      'charmander',
      'fire blast',
      'burn',
      10,
      'fire'
    );
    expect(charmander.talk()).toBe('fire blast');
  });
  it('a method called useYourMoves is available', () => {
    const charmander = new Pokemon(
      'charmander',
      'fire blast',
      'burn',
      10,
      'fire'
    );
    expect(typeof charmander.useYourMoves).toBe('function');
  });
  it("method useYourMoves returns charmander's fave move", () => {
    const charmander = new Pokemon(
      'charmander',
      'fire blast',
      'burn',
      10,
      'fire'
    );
    expect(charmander.useYourMoves()).toBe('burn');
  });
});

describe('Trainer', () => {
  test('returns an object- a new instance of Trainer', () => {
    const msTrainer = new Trainer();
    expect(typeof msTrainer).toBe('object');
    expect(msTrainer).toBeInstanceOf(Trainer);
  });
  test('instances of Trainer have a name property with value of passed argument', () => {
    const msTrainer = new Trainer('Ms Trainer');
    expect(msTrainer.name).toBe('Ms Trainer');
  });
  test('instances of Trainer have a pokedex which stores pokemon', () => {
    const msTrainer = new Trainer('Ms Trainer');

    expect(Array.isArray(msTrainer.pokedex)).toBe(true);
  });
  describe('Trainer methods', () => {
    test('catch is a function', () => {
      const msTrainer = new Trainer();
      expect(typeof msTrainer.catch).toBe('function');
    });
    test('catch adds new pokemon object to the pokedex', () => {
      const msTrainer = new Trainer();
      const charmander = new Pokemon(
        'charmander',
        'fire blast',
        'burn',
        10,
        'fire'
      );
      msTrainer.catch(charmander);
      expect(typeof msTrainer.pokedex[0]).toEqual('object');
      expect(msTrainer.pokedex[0].name).toBe('charmander');
    });
  });
});

describe.only('Battle', () => {
  test('Battle returns a new instance', () => {
    const msTrainer = new Trainer('Ms Trainer');
    const Misty = new Trainer('Misty');
    const gymBattle = new Battle(msTrainer, Misty);

    expect(typeof gymBattle).toBe('object');
    expect(gymBattle).toBeInstanceOf(Battle);
  });
  test('has 2 trainer properties with names of the trainers passed as args', () => {
    const msTrainer = new Trainer('Ms Trainer');
    const Misty = new Trainer('Misty');
    const gymBattle = new Battle(msTrainer, Misty);
    expect(gymBattle.trainer1).toBe(msTrainer);
    expect(gymBattle.trainer2).toBe(Misty);
  });
  test("has 2 pokemon properties which refer to the first pokemon found in each trainer's pokedex", () => {
    const msTrainer = new Trainer('Ms Trainer');
    const jigglypuff = new Pokemon(
      'Jigglypuff',
      'jiggle jiggle',
      'induce sleep',
      7
    );
    msTrainer.catch(jigglypuff);
    const Misty = new Trainer('Misty');
    const wigglytuff = new Pokemon(
      'Wigglytuff',
      'wiggle wiggle',
      'mind bend',
      14
    );
    Misty.catch(wigglytuff);
    const gymBattle = new Battle(msTrainer, Misty);
    expect(gymBattle.pokemon1.name).toBe('Jigglypuff');
    expect(gymBattle.pokemon2.name).toBe('Wigglytuff');
  });
  describe('Battle methods', () => {
    test('fight method is an available function', () => {
      const msTrainer = new Trainer('Ms Trainer');
      const jigglypuff = new Pokemon(
        'Jigglypuff',
        'jiggle jiggle',
        'induce sleep',
        7
      );
      msTrainer.catch(jigglypuff);
      const Misty = new Trainer('Misty');
      const wigglytuff = new Pokemon(
        'Wigglytuff',
        'wiggle wiggle',
        'mind bend',
        14
      );
      Misty.catch(wigglytuff);
      const gymBattle = new Battle(msTrainer, Misty);
      expect(typeof gymBattle.fight).toBe('function');
    });
    test('fight method takes a pokemon and deducts attack damage from defending pokemon', () => {
      const msTrainer = new Trainer('Ms Trainer');
      const jigglypuff = new Pokemon(
        'Jigglypuff',
        'jiggle jiggle',
        'induce sleep',
        7
      );
      msTrainer.catch(jigglypuff);
      const Misty = new Trainer('Misty');
      const wigglytuff = new Pokemon(
        'Wigglytuff',
        'wiggle wiggle',
        'mind bend',
        14
      );
      Misty.catch(wigglytuff);
      const gymBattle = new Battle(msTrainer, Misty);
      gymBattle.fight();
      expect(gymBattle.pokemon2.hitPoints).toBe(93);
    });
    test('fight method takes a pokemon and deducts attack damage from defending pokemon and ends turn and reverses role in second invocation', () => {
      const msTrainer = new Trainer('Ms Trainer');
      const jigglypuff = new Pokemon(
        'Jigglypuff',
        'jiggle jiggle',
        'induce sleep',
        7
      );
      msTrainer.catch(jigglypuff);
      const Misty = new Trainer('Misty');
      const wigglytuff = new Pokemon(
        'Wigglytuff',
        'wiggle wiggle',
        'mind bend',
        14
      );
      Misty.catch(wigglytuff);
      const gymBattle = new Battle(msTrainer, Misty);
      gymBattle.fight();
      expect(gymBattle.turn).toBe('pokemon2');
      gymBattle.fight();
      expect(gymBattle.turn).toBe('pokemon1');
      expect(gymBattle.pokemon2.hitPoints).toBe(93);
      expect(gymBattle.pokemon1.hitPoints).toBe(86);
    });
  });
});
