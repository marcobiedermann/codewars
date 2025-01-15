import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import presses from './index.ts';

describe('presses', () => {
  it('should calculate the number of button presses', () => {
    assert.strictEqual(presses('LOL'), 9);
    assert.strictEqual(presses('HOW R U'), 13);
  });
});
