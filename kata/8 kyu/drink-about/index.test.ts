import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import peopleWithAgeDrink from './index.ts';

describe('peopleWithAgeDrink', () => {
  it('should return drink based on age', () => {
    assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
    assert.strictEqual(peopleWithAgeDrink(18), 'drink beer');
    assert.strictEqual(peopleWithAgeDrink(16), 'drink coke');
    assert.strictEqual(peopleWithAgeDrink(3), 'drink toddy');
  });
});
