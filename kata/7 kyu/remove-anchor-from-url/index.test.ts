import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeUrlAnchor from './index.ts';

describe('removeUrlAnchor', () => {
  it('should remove fragment from URL', () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
  });
});
