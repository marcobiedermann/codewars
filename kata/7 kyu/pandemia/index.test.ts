import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import infected from './index.ts';

describe('infected', () => {
  it('should calculate percentage of infected populatopn', () => {
    assert.strictEqual(infected('01000000X000X011X0X'), 73.33333333333333);
    assert.strictEqual(infected('01X000X010X011XX'), 72.72727272727273);
    assert.strictEqual(infected('XXXXX'), 0);
    assert.strictEqual(infected('0000000010'), 100);
    assert.strictEqual(infected('X00X000000X10X0100'), 42.857142857142854);
  });
});
