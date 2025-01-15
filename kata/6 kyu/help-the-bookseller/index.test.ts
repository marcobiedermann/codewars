import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stockList from './index.ts';

describe('stockList', () => {
  it('should sum quantity of books for each category', () => {
    assert.strictEqual(
      stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B']),
      '(A : 200) - (B : 1140)',
    );
    assert.strictEqual(
      stockList(['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'], ['A', 'B', 'C', 'W']),
      '(A : 0) - (B : 114) - (C : 70) - (W : 0)',
    );
    assert.strictEqual(stockList([], ['B', 'R', 'D', 'X']), '');
  });
});
