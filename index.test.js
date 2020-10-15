const Pokemon = require('./index')

describe('Pokemon', () => {
    it('returns an instanciated object of a pokemon', () => {
        const charmander =  new Pokemon()
        expect(charmander).toBeInstanceOf(Pokemon)
        expect(typeof charmander).toBe('object')
    });
     it('instanciated object has a property of name, initialised to the name of the pokemon created', () => {
        const charmander =  new Pokemon('charmander')
        expect(charmander.name).toBe('charmander')
     })
     it('instanciated object has a property of hit points, initialised to 100', () => {
        const charmander =  new Pokemon('charmander')
        expect(charmander.hitPoints).toBe(100)
     })
     it('instanciated object has a property of sound, initialised to a passed argument', () => {
        const charmander =  new Pokemon('charmander', 'fire blast')
        expect(charmander.sound).toBe('fire blast')
     })
     it('instanciated object has a property of move, initialised to a passed move argument', () => {
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn')
        expect(charmander.move).toBe('burn')
     })
     it('instanciated object has a property of attackDamage, initialised to an attackDamage argument', () => {
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn', 10)
        expect(charmander.attackDamage).toBe(10)
     })
     it('instanciated object has a property of type, initialised to a default of normal but able to be reassigned', () => {
        const pidgy = new Pokemon('pidgy', 'sqwark', 'peck', 8)
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn', 10, 'fire')
        expect(pidgy.type).toBe('normal')
        expect(charmander.type).toBe('fire')
     })
});

describe('methods', () => {
    it('a method called talk is available', () => {
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn', 10, 'fire')
        const charmanderMethods = Object.getPrototypeOf(charmander)
        expect(typeof charmanderMethods.talk).toBe('function')
    });
    it('method talk returns the sound of charmander', () => {
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn', 10, 'fire')
        expect(charmander.talk()).toBe('fire blast')
    });
    it('a method called useYourMoves is available', () => {
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn', 10, 'fire')
        expect(typeof charmander.useYourMoves).toBe('function')
    })
    it('method useYourMoves returns charmander\'s fave move', () => {
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn', 10, 'fire')
        expect(charmander.useYourMoves()).toBe('burn')
    });
});