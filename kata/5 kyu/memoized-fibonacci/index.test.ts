import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import fibonacci from './index.ts';

describe('fibonacci', () => {
  it('should calculate the nth fibonacci number', () => {
    assert.strictEqual(fibonacci(0), 0);
    assert.strictEqual(fibonacci(1), 1);
    assert.strictEqual(fibonacci(5), 5);
    assert.strictEqual(fibonacci(10), 55);
    assert.strictEqual(fibonacci(15), 610);
    assert.strictEqual(fibonacci(20), 6765);
    assert.strictEqual(fibonacci(50), 12586269025);
    assert.strictEqual(fibonacci(60), 1548008755920);
    assert.strictEqual(fibonacci(70), 190392490709135);
  });
});
