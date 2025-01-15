import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Dinglemouse from './index.ts';

describe('dinglemouse', () => {
  it('should get the full name', () => {
    assert.strictEqual(new Dinglemouse('Clint', 'Eastwood').getFullName(), 'Clint Eastwood');
  });
});
