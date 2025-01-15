import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import replaceDots from './index.ts';

describe('replaceDots', () => {
  it('should replace all dots with dashes', () => {
    assert.strictEqual(replaceDots('one.two.three'), 'one-two-three');
  });
});
