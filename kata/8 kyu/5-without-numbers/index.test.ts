import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import unusualFive from './index.ts';

describe('unusualFive', () => {
  it('should return `5`', () => {
    assert.strictEqual(unusualFive(), 5);
  });
});
