import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import cannonsReady from './index.ts';

describe('cannonsReady', () => {
  it('should check if all cannons are ready', () => {
    assert.strictEqual(
      cannonsReady({ Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' }),
      'Fire!',
    );
    assert.strictEqual(
      cannonsReady({ Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' }),
      'Shiver me timbers!',
    );
  });
});
