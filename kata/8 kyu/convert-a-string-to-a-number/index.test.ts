import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stringToNumber from './index.ts';

describe('stringToNumber', () => {
  it('should convert string to number', () => {
    assert.strictEqual(stringToNumber('1234'), 1234);
    assert.strictEqual(stringToNumber('605'), 605);
    assert.strictEqual(stringToNumber('1405'), 1405);
    assert.strictEqual(stringToNumber('-7'), -7);
  });
});
