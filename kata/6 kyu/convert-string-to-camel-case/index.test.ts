import { describe, expect, it } from 'vitest';
import toCamelCase from '.';

describe('toCamelCase', () => {
  it('should transform string to camelCase', () => {
    expect.assertions(4);

    expect(toCamelCase('')).toBe('');
    expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior');
    expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior');
    expect(toCamelCase('A-B-C')).toBe('ABC');
  });
});
