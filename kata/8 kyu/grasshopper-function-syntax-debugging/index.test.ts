import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import main from './index.ts';

describe('main', () => {
  it('should concatenate two strings', () => {
    assert.strictEqual(main('take ', 'item'), 'take item');
    assert.strictEqual(main('use ', 'sword'), 'use sword');
  });
});
