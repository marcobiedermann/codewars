import pigIt from '.';

describe('pigIt', () => {
  it('should move first letter of each word to end and append `ay`', () => {
    expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
    expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
  });
});
