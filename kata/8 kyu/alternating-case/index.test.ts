import toAlternatingCase from '.';

describe('toAlternatingCase', () => {
  it('should work for fixed tests (provided in the description)', () => {
    expect(toAlternatingCase('hello world')).toEqual('HELLO WORLD');
    expect(toAlternatingCase('HELLO WORLD')).toEqual('hello world');
    expect(toAlternatingCase('hello WORLD')).toEqual('HELLO world');
    expect(toAlternatingCase('HeLLo WoRLD')).toEqual('hEllO wOrld');
    expect(toAlternatingCase('12345')).toEqual('12345');
    expect(toAlternatingCase('1a2b3c4d5e')).toEqual('1A2B3C4D5E');
    expect(toAlternatingCase('String.prototype.toAlternatingCase')).toEqual(
      'sTRING.PROTOTYPE.TOaLTERNATINGcASE',
    );
    expect(toAlternatingCase(toAlternatingCase('Hello World'))).toEqual('Hello World');
  });
});
