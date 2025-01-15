import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import addLetters from './index.ts';

describe('addLetters', () => {
  it('should add up letters to one letter', () => {
    assert.strictEqual(addLetters('a', 'b', 'c'), 'f');
    assert.strictEqual(addLetters('z'), 'z');
    assert.strictEqual(addLetters('a', 'b'), 'c');
    assert.strictEqual(addLetters('c'), 'c');
    assert.strictEqual(addLetters('z', 'a'), 'a');
    assert.strictEqual(addLetters('y', 'c', 'b'), 'd');
    assert.strictEqual(addLetters(), 'z');
  });
});
