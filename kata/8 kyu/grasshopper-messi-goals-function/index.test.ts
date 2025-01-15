import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import goals from './index.ts';

describe('goals', () => {
  it('should sum number of arguments', () => {
    assert.strictEqual(goals(0, 0, 0), 0);
    assert.strictEqual(goals(43, 10, 5), 58);
  });
});
