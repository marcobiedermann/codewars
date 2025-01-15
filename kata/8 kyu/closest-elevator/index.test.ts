import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import elevator from './index.ts';

describe('elevator', () => {
  it("if the left elevator is closer to the call, should return 'left'", () => {
    assert.strictEqual(elevator(0, 1, 0), 'left');
  });

  it("if the right elevator is closer to the call, should return 'right'", () => {
    assert.strictEqual(elevator(0, 1, 1), 'right');
    assert.strictEqual(elevator(0, 1, 2), 'right');
  });

  it("if both elevators are on the same floor, should return 'right'", () => {
    assert.strictEqual(elevator(0, 0, 0), 'right');
  });

  it("if both elevators are in equal distance from the call, should return 'right'", () => {
    assert.strictEqual(elevator(0, 2, 1), 'right');
  });
});
