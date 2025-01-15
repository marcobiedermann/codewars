import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import doubleChar from './index.ts';

describe('doubleChar', () => {
  it('should repeat each character in string', () => {
    assert.strictEqual(doubleChar('abcd'), 'aabbccdd');
    assert.strictEqual(doubleChar('Adidas'), 'AAddiiddaass');
    assert.strictEqual(doubleChar('1337'), '11333377');
    assert.strictEqual(doubleChar('illuminati'), 'iilllluummiinnaattii');
    assert.strictEqual(doubleChar('123456'), '112233445566');
    assert.strictEqual(doubleChar('%^&*('), '%%^^&&**((');
  });
});
