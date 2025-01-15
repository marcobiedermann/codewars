import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import containAllRots from './index.ts';

describe('containAllRots', () => {
  it('should check if all rotations of string are included', () => {
    assert.strictEqual(containAllRots('', []), true);
    assert.strictEqual(containAllRots('', ['bsjq', 'qbsj']), true);
    assert.strictEqual(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']), true);
    assert.strictEqual(
      containAllRots('XjYABhR', [
        'TzYxlgfnhf',
        'yqVAuoLjMLy',
        'BhRXjYA',
        'YABhRXj',
        'hRXjYAB',
        'jYABhRX',
        'XjYABhR',
        'ABhRXjY',
      ]),
      false,
    );
  });
});
