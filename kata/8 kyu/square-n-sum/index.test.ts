import squareSum from '.';

describe('squareSum', () => {
  it('should square each number', () => {
    expect.assertions(2);

    expect(squareSum([1, 2])).toBe(5);
    expect(squareSum([0, 3, 4, 5])).toBe(50);
  });
});
