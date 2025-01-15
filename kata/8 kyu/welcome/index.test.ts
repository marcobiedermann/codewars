import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import greet from './index.ts';

describe('greet', () => {
  it('should translate `Welcome`', () => {
    assert.strictEqual(greet('english'), 'Welcome');
    assert.strictEqual(greet('dutch'), 'Welkom');
    assert.strictEqual(greet('IP_ADDRESS_INVALID'), 'Welcome');
  });
});
