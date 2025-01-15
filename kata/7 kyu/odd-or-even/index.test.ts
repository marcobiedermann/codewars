import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import oddOrEven from './index.ts';

describe('oddOrEven', () => {
  it('edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even');
    assert.strictEqual(oddOrEven([1]), 'odd');
    assert.strictEqual(oddOrEven([]), 'even');
  });

  it('even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even');
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even');
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even');
  });

  it('negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even');
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even');
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even');
  });

  it('odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd');
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd');
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd');
  });

  it('negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd');
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd');
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd');
  });
});
