import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should fix string case', () => {
    assert.strictEqual(solve('code'), 'code');
    assert.strictEqual(solve('CODe'), 'CODE');
    assert.strictEqual(solve('COde'), 'code');
    assert.strictEqual(solve('Code'), 'code');
  });
});
