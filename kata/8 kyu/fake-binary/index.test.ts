import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import fakeBin from './index.ts';

describe('fakeBin', () => {
  it('should replace digits below 5 with `0` and rest by `1`', () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
  });
});
