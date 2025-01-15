import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countSheeps from './index.ts';

describe('countSheeps', () => {
  it('should count present sheep in array', () => {
    assert.strictEqual(
      countSheeps([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
      ]),
      17,
    );
  });
});
