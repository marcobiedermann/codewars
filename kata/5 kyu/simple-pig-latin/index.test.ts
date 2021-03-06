import pigIt from '.';

describe('pigIt', () => {
  it('should move first letter of each word to end and append `ay`', () => {
    expect.assertions(2);

    expect(pigIt('Pig latin is cool')).toStrictEqual('igPay atinlay siay oolcay');
    expect(pigIt('This is my string')).toStrictEqual('hisTay siay ymay tringsay');
  });
});
