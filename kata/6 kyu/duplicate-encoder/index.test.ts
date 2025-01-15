import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import duplicateEncode from './index.ts';

describe('duplicateEncode', () => {
  it('should convert string', () => {
    assert.strictEqual(duplicateEncode('din'), '(((');
    assert.strictEqual(duplicateEncode('recede'), '()()()');
    assert.strictEqual(duplicateEncode('Success'), ')())())');
    assert.strictEqual(duplicateEncode('(( @'), '))((');
  });
});
