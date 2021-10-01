import replaceDots from '.';

describe('replaceDots', () => {
  it('should replace all dots with dashes', () => {
    expect.assertions(1);

    expect(replaceDots('one.two.three')).toBe('one-two-three');
  });
});
