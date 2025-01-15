import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should join strings based on their length', () => {
    assert.strictEqual(solution('45', '1'), '1451');
    assert.strictEqual(solution('13', '200'), '1320013');
    assert.strictEqual(solution('Soon', 'Me'), 'MeSoonMe');
    assert.strictEqual(solution('U', 'False'), 'UFalseU');
  });
});
