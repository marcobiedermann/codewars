import modifiedSum from '.';

describe('modifiedSum', () => {
  it('should return modified sum', () => {
    expect(modifiedSum([1, 2, 3], 3)).toBe(30);
    expect(modifiedSum([1, 2], 5)).toBe(30);
  });
});
