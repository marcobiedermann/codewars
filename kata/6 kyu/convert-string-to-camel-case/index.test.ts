import toCamelCase from '.';

describe('toCamelCase', () => {
  it('should transform string to camelCase', () => {
    expect.assertions(4);

    expect(toCamelCase('')).toStrictEqual('');
    expect(toCamelCase('the_stealth_warrior')).toStrictEqual('theStealthWarrior');
    expect(toCamelCase('The-Stealth-Warrior')).toStrictEqual('TheStealthWarrior');
    expect(toCamelCase('A-B-C')).toStrictEqual('ABC');
  });
});
