import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import thirt from './index.ts';

describe('thirt', () => {
  it('should get the remainder when deviding by 13', () => {
    assert.strictEqual(thirt(8529), 79);
    assert.strictEqual(thirt(85299258), 31);
    assert.strictEqual(thirt(5634), 57);
    assert.strictEqual(thirt(1111111111), 71);
    assert.strictEqual(thirt(987654321), 30);
  });
});
