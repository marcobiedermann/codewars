import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import spacify from './index.ts';

describe('spacify', () => {
  it('should add a space between each character', () => {
    assert.strictEqual(spacify('hello world'), 'h e l l o   w o r l d');
    assert.strictEqual(spacify('12345'), '1 2 3 4 5');
  });
});
