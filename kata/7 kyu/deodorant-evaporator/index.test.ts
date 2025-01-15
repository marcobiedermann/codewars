import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import evaporator from './index.ts';

describe('evaporator', () => {
  it('should calculate day on which the vaporator will be out of use', () => {
    assert.strictEqual(evaporator(10, 10, 10), 22);
  });
});
