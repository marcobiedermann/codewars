import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import tripleTrouble from './index.ts';

describe('tripleTrouble', () => {
  it('should combine all letters of the three strings', () => {
    assert.strictEqual(tripleTrouble('this', 'test', 'lock'), 'ttlheoiscstk');
    assert.strictEqual(tripleTrouble('aa', 'bb', 'cc'), 'abcabc');
    assert.strictEqual(tripleTrouble('Bm', 'aa', 'tn'), 'Batman');
    assert.strictEqual(tripleTrouble('LLh', 'euo', 'xtr'), 'LexLuthor');
  });
});
