import howManydays from '.';

describe('howManydays', () => {
  it('should return the number of days in a month', () => {
    expect.assertions(5);

    expect(howManydays(1)).toBe(31);
    expect(howManydays(2)).toBe(28);
    expect(howManydays(3)).toBe(31);
    expect(howManydays(4)).toBe(30);
    expect(howManydays(12)).toBe(31);
  });
});
