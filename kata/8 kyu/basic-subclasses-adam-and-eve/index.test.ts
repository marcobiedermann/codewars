import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import God, { Man } from './index.ts';

describe('god', () => {
  it('should return a man and woman', () => {
    const humans = God.create();

    assert.strictEqual(humans[0] instanceof Man, true);
  });
});
