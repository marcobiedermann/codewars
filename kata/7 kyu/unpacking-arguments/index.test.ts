import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import spread from './index.ts';

describe('spread', () => {
  it('should call the function with the given arguments', () => {
    assert.strictEqual(
      spread((x: number, y: number) => x + y, [1, 2]),
      3,
    );
  });
});
