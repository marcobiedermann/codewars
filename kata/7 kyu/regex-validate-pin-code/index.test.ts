import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import validatePIN from './index.ts';

describe('validatePIN', () => {
  it('should return False for pins with length other than 4 or 6', () => {
    assert.strictEqual(validatePIN('1'), false);
    assert.strictEqual(validatePIN('12'), false);
    assert.strictEqual(validatePIN('123'), false);
    assert.strictEqual(validatePIN('12345'), false);
    assert.strictEqual(validatePIN('1234567'), false);
    assert.strictEqual(validatePIN('-1234'), false);
    assert.strictEqual(validatePIN('1.234'), false);
    assert.strictEqual(validatePIN('-1.234'), false);
    assert.strictEqual(validatePIN('00000000'), false);
  });

  it('should return False for pins which contain characters other than digits', () => {
    assert.strictEqual(validatePIN('a234'), false);
    assert.strictEqual(validatePIN('.234'), false);
  });

  it('should return True for valid pins', () => {
    assert.strictEqual(validatePIN('1234'), true);
    assert.strictEqual(validatePIN('0000'), true);
    assert.strictEqual(validatePIN('1111'), true);
    assert.strictEqual(validatePIN('123456'), true);
    assert.strictEqual(validatePIN('098765'), true);
    assert.strictEqual(validatePIN('000000'), true);
    assert.strictEqual(validatePIN('123456'), true);
    assert.strictEqual(validatePIN('090909'), true);
  });
});
