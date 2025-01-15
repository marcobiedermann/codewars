import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import greet from './index.ts';

describe('greet', () => {
  it('should greet and capitalize name', () => {
    assert.strictEqual(greet('riley'), 'Hello Riley!');
  });
});
