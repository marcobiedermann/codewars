import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeChar from './index.ts';

describe('removeChar', () => {
  it('should remove the first and last character from string', () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});
