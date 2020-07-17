import modifiedSum from '.';

describe('modifiedSum', () => {
  it('should return modified sum', () => {
    expect.assertions(2);

    expect(modifiedSum([1, 2, 3], 3)).toStrictEqual(30);
    expect(modifiedSum([1, 2], 5)).toStrictEqual(30);
  });
});
