import toCamelCase from '.';

describe('toCamelCase', () => {
  it('should transform string to camelCase', () => {
    expect(toCamelCase('')).toEqual('');
    expect(toCamelCase('the_stealth_warrior')).toEqual('theStealthWarrior');
    expect(toCamelCase('The-Stealth-Warrior')).toEqual('TheStealthWarrior');
    expect(toCamelCase('A-B-C')).toEqual('ABC');
  });
});
