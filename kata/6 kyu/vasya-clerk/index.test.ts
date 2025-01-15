import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import tickets from './index.ts';

describe('tickets', () => {
  it('should return `YES` if you can sell a ticket to every person', () => {
    assert.strictEqual(tickets([25, 25, 50, 50]), 'YES');
    assert.strictEqual(tickets([25, 100]), 'NO');
    assert.strictEqual(tickets([25, 25, 25, 25, 25, 100, 100]), 'NO');
  });
});
