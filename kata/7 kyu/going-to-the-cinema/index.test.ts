import movie from '.';

describe('movie', () => {
  it('should calculate how many times you have to go to the cinema', () => {
    expect.assertions(2);

    expect(movie(500, 15, 0.9)).toBe(43);
    expect(movie(100, 10, 0.95)).toBe(24);
  });
});
