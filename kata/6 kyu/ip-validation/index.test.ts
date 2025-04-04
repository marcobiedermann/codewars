import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isValidIP from './index.ts';

describe('isValidIP', () => {
  it('should check if IP is valid', () => {
    assert.strictEqual(isValidIP('0.0.0.0'), true);
    assert.strictEqual(isValidIP('12.255.56.1'), true);
    assert.strictEqual(isValidIP('137.255.156.100'), true);

    assert.strictEqual(isValidIP(''), false);
    assert.strictEqual(isValidIP('abc.def.ghi.jkl'), false);
    assert.strictEqual(isValidIP('123.456.789.0'), false);
    assert.strictEqual(isValidIP('12.34.56'), false);
    assert.strictEqual(isValidIP('01.02.03.04'), false);
    assert.strictEqual(isValidIP('256.1.2.3'), false);
    assert.strictEqual(isValidIP('1.2.3.4.5'), false);
    assert.strictEqual(isValidIP('123,45,67,89'), false);
    assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
    assert.strictEqual(isValidIP(' 1.2.3.4'), false);
    assert.strictEqual(isValidIP('1.2.3.4 '), false);
    assert.strictEqual(isValidIP('12.34.56.-7'), false);
    assert.strictEqual(isValidIP('1.2.3.4\n'), false);
    assert.strictEqual(isValidIP('\n1.2.3.4'), false);
  });
});
