import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import totalGoals from './index.ts';

describe('totalGoals', () => {
  it('should sum the goals Messi scored', () => {
    assert.strictEqual(totalGoals, 58);
  });
});
