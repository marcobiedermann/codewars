import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import pigIt from './index.ts';

describe('pigIt', () => {
  it('should move first letter of each word to end and append `ay`', () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay');
  });
});
