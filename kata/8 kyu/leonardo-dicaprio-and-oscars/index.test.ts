import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import leo from './index.ts';

describe('leo', () => {
  it('should describe leo', () => {
    assert.strictEqual(leo(89), 'Leo got one already!');
    assert.strictEqual(leo(88), 'Leo finally won the oscar! Leo is happy');
    assert.strictEqual(leo(87), 'When will you give Leo an Oscar?');
    assert.strictEqual(leo(86), 'Not even for Wolf of wallstreet?!');
  });
});
