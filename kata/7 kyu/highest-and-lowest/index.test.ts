import highAndLow from '.';

describe('highAndLow', () => {
  it('should return the highest and lowest number', () => {
    expect.assertions(1);

    expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toBe('542 -214');
  });
});
