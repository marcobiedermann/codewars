import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import square from './index.ts';

describe('square', () => {
  it('should return square', () => {
    assert.strictEqual(square(3), 9);
  });
});
