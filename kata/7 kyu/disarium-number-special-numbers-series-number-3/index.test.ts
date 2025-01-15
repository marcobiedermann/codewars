import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import disariumNumber from './index.ts';

describe('disariumNumber', () => {
  it('should check if number is a disarium number', () => {
    assert.strictEqual(disariumNumber(89), 'Disarium !!');
    assert.strictEqual(disariumNumber(564), 'Not !!');
    assert.strictEqual(disariumNumber(1024), 'Not !!');
    assert.strictEqual(disariumNumber(135), 'Disarium !!');
    assert.strictEqual(disariumNumber(136586), 'Not !!');
  });
});
