import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import converter from './index.ts';

describe('converter', () => {
  it('should convert miles per imperial gallon into kilometers per liter', () => {
    assert.strictEqual(converter(10), 3.54);
    assert.strictEqual(converter(20), 7.08);
    assert.strictEqual(converter(30), 10.62);
  });
});
