import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import elapsedSeconds from './index.ts';

describe('elapsedSeconds', () => {
  it('should return the number of seconds elapsed between the start and end time', () => {
    assert.strictEqual(
      elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 2)),
      1,
    );
    assert.strictEqual(
      elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 20)),
      19,
    );
    assert.strictEqual(
      elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 1, 20)),
      79,
    );
  });
});
