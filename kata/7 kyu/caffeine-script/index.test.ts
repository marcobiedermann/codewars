import caffeineBuzz from '.';

describe('caffeineBuzz', () => {
  it('should return caffein script', () => {
    expect(caffeineBuzz(1)).toBe('mocha_missing!');
    expect(caffeineBuzz(3)).toBe('Java');
    expect(caffeineBuzz(6)).toBe('JavaScript');
    expect(caffeineBuzz(12)).toBe('CoffeeScript');
  });
});
