import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import twoDecimalPlaces from './index.ts';

describe('twoDecimalPlaces', () => {
  it('should round number to two decimal places', () => {
    assert.strictEqual(twoDecimalPlaces(4.659725356), 4.66);
    assert.strictEqual(twoDecimalPlaces(173735326.3783732), 173735326.38);
    assert.strictEqual(twoDecimalPlaces(4.653725356), 4.65);
  });
});
