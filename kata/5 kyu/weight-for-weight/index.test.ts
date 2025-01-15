import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import orderWeight from './index.ts';

describe('orderWeight', () => {
  it('should order weights', () => {
    assert.strictEqual(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99');
    assert.strictEqual(
      orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
      '11 11 2000 10003 22 123 1234000 44444444 9999',
    );
  });
});
