import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import numberOfPairs from './index.ts';

describe('numberOfPairs', () => {
  it('should return the number of pairs', () => {
    assert.strictEqual(numberOfPairs(['red', 'red']), 1);
    assert.strictEqual(numberOfPairs(['red', 'green', 'blue']), 0);
    assert.strictEqual(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']), 3);
  });
});
