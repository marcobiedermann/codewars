import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import list from './index.ts';

describe('list', () => {
  it('should separate names by comma, except for the last two', () => {
    assert.strictEqual(
      list([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' },
      ]),
      'Bart, Lisa, Maggie, Homer & Marge',
    );
    assert.strictEqual(
      list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]),
      'Bart, Lisa & Maggie',
    );
    assert.strictEqual(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa');
    assert.strictEqual(list([{ name: 'Bart' }]), 'Bart');
    assert.strictEqual(list([]), '');
  });
});
