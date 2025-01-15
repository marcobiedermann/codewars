import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import foldTo from './index.ts';

describe('foldTo', () => {
  it('should calculate number of folds to reach distance', () => {
    assert.strictEqual(foldTo(-1), null);
    assert.strictEqual(foldTo(1, 2), 0);
    assert.strictEqual(foldTo(384000000), 42);
  });
});
