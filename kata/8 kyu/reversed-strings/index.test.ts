import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should reverse string', () => {
    assert.strictEqual(solution('world'), 'dlrow');
  });
});
