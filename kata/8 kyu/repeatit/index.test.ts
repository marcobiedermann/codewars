import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import repeatIt from './index.ts';

describe('repeatIt', () => {
  it('should repeat string `n` times', () => {
    assert.strictEqual(repeatIt('*', 3), '***');
    assert.strictEqual(
      repeatIt('Hello', 11),
      'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello',
    );
    assert.strictEqual(repeatIt(1234, 5), 'Not a string');
  });
});
