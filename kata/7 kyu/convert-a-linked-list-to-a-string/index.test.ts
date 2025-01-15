import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stringify, { Node } from './index.ts';

describe('stringify', () => {
  it('should convert a linked list to a string', () => {
    assert.strictEqual(stringify(new Node(1, new Node(2, new Node(3)))), '1 -> 2 -> 3 -> null');
    assert.strictEqual(
      stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),
      '0 -> 1 -> 4 -> 9 -> 16 -> null',
    );
    assert.strictEqual(stringify(null), 'null');
  });
});
