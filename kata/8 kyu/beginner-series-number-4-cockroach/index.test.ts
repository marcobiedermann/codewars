import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import cockroachSpeed from './index.ts';

describe('cockroachSpeed', () => {
  it('should return cm per second', () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});
