import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { decode, encode } from './index.ts';

describe('foo', () => {
  it('should', () => {
    assert.strictEqual(encode('hello'), 'h2ll4');
    assert.strictEqual(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
    assert.strictEqual(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
    assert.strictEqual(decode('h2ll4'), 'hello');
  });
});
