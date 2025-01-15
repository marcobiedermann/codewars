import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import updateLight from './index.ts';

describe('updateLight', () => {
  it('should return next color', () => {
    assert.strictEqual(updateLight('green'), 'yellow');
    assert.strictEqual(updateLight('yellow'), 'red');
    assert.strictEqual(updateLight('red'), 'green');
  });
});
