import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import buildString from './index.ts';

describe('buildString', () => {
  it('should join items in string', () => {
    assert.strictEqual(
      buildString('Cheese', 'Milk', 'Chocolate'),
      'I like Cheese, Milk, Chocolate!',
    );
    assert.strictEqual(buildString('Cheese', 'Milk'), 'I like Cheese, Milk!');
    assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!');
  });
});
