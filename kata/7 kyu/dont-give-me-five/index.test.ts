import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import dontGiveMeFive from './index.ts';

describe('dontGiveMeFive', () => {
  it('should return total numbers which do not include digit `5`', () => {
    assert.strictEqual(dontGiveMeFive(1, 9), 8);
    assert.strictEqual(dontGiveMeFive(4, 17), 12);
  });
});
