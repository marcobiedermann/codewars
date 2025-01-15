import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sayHello from './index.ts';

describe('sayHello', () => {
  it('should should say hello to name passed in', () => {
    assert.strictEqual(sayHello('Mr. Spock'), 'Hello, Mr. Spock');
    assert.strictEqual(sayHello('Captain Kirk'), 'Hello, Captain Kirk');
    assert.strictEqual(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura');
    assert.strictEqual(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy');
  });
});
