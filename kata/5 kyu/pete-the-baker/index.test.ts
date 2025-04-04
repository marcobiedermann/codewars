import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import cakes from './index.ts';

describe('cakes', () => {
  it('should return number of cakes', () => {
    assert.strictEqual(
      cakes(
        {
          flour: 500,
          sugar: 200,
          eggs: 1,
        },
        {
          flour: 1200,
          sugar: 1200,
          eggs: 5,
          milk: 200,
        },
      ),
      2,
    );
    assert.strictEqual(
      cakes(
        {
          apples: 3,
          flour: 300,
          sugar: 150,
          milk: 100,
          oil: 100,
        },
        {
          sugar: 500,
          flour: 2000,
          milk: 2000,
        },
      ),
      0,
    );
  });
});
