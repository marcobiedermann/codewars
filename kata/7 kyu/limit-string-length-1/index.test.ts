import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should truncate the string if limit is reached', () => {
    assert.strictEqual(solution('Testing String', 3), 'Tes...');
    assert.strictEqual(solution('Testing String', 8), 'Testing ...');
    assert.strictEqual(solution('Test', 8), 'Test');
  });
});
