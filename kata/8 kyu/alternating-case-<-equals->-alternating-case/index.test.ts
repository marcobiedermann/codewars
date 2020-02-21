import toAlternatingCase from '.';

describe('toAlternatingCase', () => {
  it('should work for fixed tests (provided in the description)', () => {
    expect.assertions(8);

    expect(toAlternatingCase('hello world')).toStrictEqual('HELLO WORLD');
    expect(toAlternatingCase('HELLO WORLD')).toStrictEqual('hello world');
    expect(toAlternatingCase('hello WORLD')).toStrictEqual('HELLO world');
    expect(toAlternatingCase('HeLLo WoRLD')).toStrictEqual('hEllO wOrld');
    expect(toAlternatingCase('12345')).toStrictEqual('12345');
    expect(toAlternatingCase('1a2b3c4d5e')).toStrictEqual('1A2B3C4D5E');
    expect(toAlternatingCase('String.prototype.toAlternatingCase')).toStrictEqual(
      'sTRING.PROTOTYPE.TOaLTERNATINGcASE',
    );
    expect(toAlternatingCase(toAlternatingCase('Hello World'))).toStrictEqual('Hello World');
  });
});
