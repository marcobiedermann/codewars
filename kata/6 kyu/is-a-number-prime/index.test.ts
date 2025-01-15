import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isPrime from './index.ts';

describe('isPrime', () => {
  it('basic tests', () => {
    assert.strictEqual(isPrime(0), false);
    assert.strictEqual(isPrime(1), false);
    assert.strictEqual(isPrime(2), true);
    assert.strictEqual(isPrime(73), true);
    assert.strictEqual(isPrime(75), false);
    assert.strictEqual(isPrime(-1), false);
  });

  it('test prime', () => {
    assert.strictEqual(isPrime(3), true);
    assert.strictEqual(isPrime(5), true);
    assert.strictEqual(isPrime(7), true);
    assert.strictEqual(isPrime(41), true);
    assert.strictEqual(isPrime(5099), true);
  });

  it('test not prime', () => {
    assert.strictEqual(isPrime(4), false);
    assert.strictEqual(isPrime(6), false);
    assert.strictEqual(isPrime(8), false);
    assert.strictEqual(isPrime(9), false);
    assert.strictEqual(isPrime(45), false);
    assert.strictEqual(isPrime(-5), false);
    assert.strictEqual(isPrime(-8), false);
    assert.strictEqual(isPrime(-41), false);
  });
});
