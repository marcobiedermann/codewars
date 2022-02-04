import calculateAge from '.';

describe('calculateAge', () => {
  it('should', () => {
    expect.assertions(10);

    expect(calculateAge(2012, 2016)).toBe('You are 4 years old.');
    expect(calculateAge(1989, 2016)).toBe('You are 27 years old.');
    expect(calculateAge(2000, 2090)).toBe('You are 90 years old.');
    expect(calculateAge(2000, 1990)).toBe('You will be born in 10 years.');
    expect(calculateAge(3400, 3400)).toBe('You were born this very year!');
    expect(calculateAge(900, 2900)).toBe('You are 2000 years old.');
    expect(calculateAge(2010, 1990)).toBe('You will be born in 20 years.');
    expect(calculateAge(2010, 1500)).toBe('You will be born in 510 years.');
    expect(calculateAge(2011, 2012)).toBe('You are 1 year old.');
    expect(calculateAge(2000, 1999)).toBe('You will be born in 1 year.');
  });
});
