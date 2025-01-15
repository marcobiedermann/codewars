import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import doubleInteger from './index.ts';

describe('doubleInteger', () => {
  it('should double integer', () => {
    assert.strictEqual(doubleInteger(2), 4);
  });
});
