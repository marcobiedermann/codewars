import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import paperwork from './index.ts';

describe('paperwork', () => {
  it('should return number of copies', () => {
    assert.strictEqual(paperwork(5, 5), 25);
    assert.strictEqual(paperwork(-1, 5), 0);
    assert.strictEqual(paperwork(5, -1), 0);
  });
});
