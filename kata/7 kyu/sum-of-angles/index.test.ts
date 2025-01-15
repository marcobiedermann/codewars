import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import angle from './index.ts';

describe('angle', () => {
  it('should get inner sum of angles in n-sided polygon', () => {
    assert.strictEqual(angle(3), 180);
    assert.strictEqual(angle(4), 360);
  });
});
