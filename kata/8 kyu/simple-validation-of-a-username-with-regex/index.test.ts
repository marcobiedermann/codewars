import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import validateUsr from './index.ts';

describe('validateUsr', () => {
  it('should validate username', () => {
    assert.strictEqual(validateUsr('asddsa'), true);
    assert.strictEqual(validateUsr('a'), false);
    assert.strictEqual(validateUsr('Hass'), false);
    assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
    assert.strictEqual(validateUsr(''), false);
    assert.strictEqual(validateUsr('____'), true);
    assert.strictEqual(validateUsr('012'), false);
    assert.strictEqual(validateUsr('p1pp1'), true);
    assert.strictEqual(validateUsr('asd43 34'), false);
    assert.strictEqual(validateUsr('asd43_34'), true);
  });
});
