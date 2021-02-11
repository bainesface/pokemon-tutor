const Trainer = require('./trainer-solo');

describe('Trainer', () => {
  it('returns a new instance of a Trainer which has a name property', () => {
    const myTrainer = new Trainer('Sandy');
    expect(myTrainer).toBeInstanceOf(Trainer);
    expect(myTrainer.name).toBe('Sandy');
  });
  it('has a pocket property which is an empty array', () => {
    const myTrainer = new Trainer('Sandy');
    expect(myTrainer.pocket).toEqual([]);
  });
  describe('methods', () => {
    describe('catch', () => {
      it('has a catch method which pushes pokemon to the pocket array', () => {
        const myTrainer = new Trainer('Sandy');
        myTrainer.catch('snorlax');
        expect(myTrainer.pocket).toEqual(['snorlax']);
      });
    });
  });
});
