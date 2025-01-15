import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import searchNames from './index.ts';

describe('searchNames', () => {
  it('should filter all login pairs that end with `_`', () => {
    assert.deepEqual(
      searchNames([
        ['foo', 'foo@foo.com'],
        ['bar_', 'bar@bar.com'],
      ]),
      [['bar_', 'bar@bar.com']],
    );
  });
});
