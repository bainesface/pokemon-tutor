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
     it('instanciated object has a property of move, initialised to a passed move argument', () => {
        const charmander =  new Pokemon('charmander', 'fire blast', 'burn')
        expect(charmander.move).toBe('burn')
     })
});