import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sevenAte9 from './index.ts';

describe('sevenAte9', () => {
  it('should remove evert `9` that is in between `7`s', () => {
    assert.strictEqual(sevenAte9('797'), '77');
    assert.strictEqual(sevenAte9('7979797'), '7777');
    assert.strictEqual(sevenAte9('165561786121789797'), '16556178612178977');
  });
});
