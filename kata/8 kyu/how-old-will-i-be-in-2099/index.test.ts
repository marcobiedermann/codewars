import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import calculateAge from './index.ts';

describe('calculateAge', () => {
  it('should', () => {
    assert.strictEqual(calculateAge(2012, 2016), 'You are 4 years old.');
    assert.strictEqual(calculateAge(1989, 2016), 'You are 27 years old.');
    assert.strictEqual(calculateAge(2000, 2090), 'You are 90 years old.');
    assert.strictEqual(calculateAge(2000, 1990), 'You will be born in 10 years.');
    assert.strictEqual(calculateAge(3400, 3400), 'You were born this very year!');
    assert.strictEqual(calculateAge(900, 2900), 'You are 2000 years old.');
    assert.strictEqual(calculateAge(2010, 1990), 'You will be born in 20 years.');
    assert.strictEqual(calculateAge(2010, 1500), 'You will be born in 510 years.');
    assert.strictEqual(calculateAge(2011, 2012), 'You are 1 year old.');
    assert.strictEqual(calculateAge(2000, 1999), 'You will be born in 1 year.');
  });
});
