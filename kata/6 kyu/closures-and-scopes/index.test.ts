import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import createFunctions from './index.ts';

describe('createFunctions', () => {
  it('should return an array of function which return their index', () => {
    const callbacks = createFunctions(5);

    assert.strictEqual(callbacks[0](), 0);
    assert.strictEqual(callbacks[3](), 3);
  });
});
