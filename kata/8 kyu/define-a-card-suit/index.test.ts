import defineSuit from '.';

describe('defineSuit', () => {
  it('should return the suit of the card', () => {
    expect.assertions(4);

    expect(defineSuit('3♣')).toBe('clubs');
    expect(defineSuit('Q♠')).toBe('spades');
    expect(defineSuit('9♦')).toBe('diamonds');
    expect(defineSuit('J♥')).toBe('hearts');
  });
});
