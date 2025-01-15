import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import goodVsEvil from './index.ts';

describe('expect', () => {
  it('should return winning side', () => {
    assert.strictEqual(
      goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'),
      'Battle Result: Evil eradicates all trace of Good',
    );
    assert.strictEqual(
      goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'),
      'Battle Result: Good triumphs over Evil',
    );
    assert.strictEqual(
      goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'),
      'Battle Result: No victor on this battle field',
    );
  });
});
