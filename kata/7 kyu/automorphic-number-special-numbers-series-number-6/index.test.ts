import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import automorphic from './index.ts';

describe('automorphic', () => {
  it('should check if number is automorphic', () => {
    assert.strictEqual(automorphic(1), 'Automorphic');
    assert.strictEqual(automorphic(3), 'Not!!');
    assert.strictEqual(automorphic(6), 'Automorphic');
    assert.strictEqual(automorphic(9), 'Not!!');
    assert.strictEqual(automorphic(25), 'Automorphic');
    assert.strictEqual(automorphic(53), 'Not!!');
    assert.strictEqual(automorphic(76), 'Automorphic');
    assert.strictEqual(automorphic(95), 'Not!!');
    assert.strictEqual(automorphic(625), 'Automorphic');
    assert.strictEqual(automorphic(225), 'Not!!');
  });
});
