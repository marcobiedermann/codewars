import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import seatsInTheater from './index.ts';

describe('seatsInTheater', () => {
  it('should number of people sitting behind and to your left', () => {
    assert.strictEqual(seatsInTheater(16, 11, 5, 3), 96);
    assert.strictEqual(seatsInTheater(1, 1, 1, 1), 0);
    assert.strictEqual(seatsInTheater(13, 6, 8, 3), 18);
    assert.strictEqual(seatsInTheater(60, 100, 60, 1), 99);
    assert.strictEqual(seatsInTheater(1000, 1000, 1000, 1000), 0);
  });
});
