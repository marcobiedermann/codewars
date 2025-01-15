import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import diamond from './index.ts';

describe('diamond', () => {
  it('should print diamond', () => {
    assert.strictEqual(diamond(1), '*\n');
    assert.strictEqual(diamond(3), ' *\n***\n *\n');
    assert.strictEqual(diamond(5), '  *\n ***\n*****\n ***\n  *\n');
    assert.strictEqual(diamond(2), null);
    assert.strictEqual(diamond(-3), null);
    assert.strictEqual(diamond(0), null);
  });
});
