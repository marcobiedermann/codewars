import addFive from '.';

describe('addFive', () => {
  it('should add `5` to the given number', () => {
    expect(addFive(5)).toBe(10);
    expect(addFive(0)).toBe(5);
    expect(addFive(-5)).toBe(0);
  });
});
