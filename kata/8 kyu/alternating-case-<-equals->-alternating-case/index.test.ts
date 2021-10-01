import toAlternatingCase from '.';

describe('toAlternatingCase', () => {
  it('should work for fixed tests (provided in the description)', () => {
    expect.assertions(8);

    expect(toAlternatingCase('hello world')).toBe('HELLO WORLD');
    expect(toAlternatingCase('HELLO WORLD')).toBe('hello world');
    expect(toAlternatingCase('hello WORLD')).toBe('HELLO world');
    expect(toAlternatingCase('HeLLo WoRLD')).toBe('hEllO wOrld');
    expect(toAlternatingCase('12345')).toBe('12345');
    expect(toAlternatingCase('1a2b3c4d5e')).toBe('1A2B3C4D5E');
    expect(toAlternatingCase('String.prototype.toAlternatingCase')).toBe(
      'sTRING.PROTOTYPE.TOaLTERNATINGcASE',
    );
    expect(toAlternatingCase(toAlternatingCase('Hello World'))).toBe('Hello World');
  });
});
