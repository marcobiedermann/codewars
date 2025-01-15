import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import myLanguages from './index.ts';

describe('myLanguages', () => {
  it('should return the list of languages where your test score is at least 60, in descending order', () => {
    assert.deepEqual(myLanguages({ Java: 10, Ruby: 80, Python: 65 }), ['Ruby', 'Python']);
    assert.deepEqual(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }), ['Dutch', 'Greek', 'Hindi']);
    assert.deepEqual(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 }), []);
  });
});
