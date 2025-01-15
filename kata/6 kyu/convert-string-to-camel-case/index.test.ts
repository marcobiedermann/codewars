import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import toCamelCase from './index.ts';

describe('toCamelCase', () => {
  it('should transform string to camelCase', () => {
    assert.strictEqual(toCamelCase(''), '');
    assert.strictEqual(toCamelCase('the_stealth_warrior'), 'theStealthWarrior');
    assert.strictEqual(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior');
    assert.strictEqual(toCamelCase('A-B-C'), 'ABC');
  });
});
