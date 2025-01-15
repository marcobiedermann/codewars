import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { scoobydoo, snoopy } from './index.ts';

describe('dog', () => {
  it('should bark', () => {
    assert.strictEqual(snoopy.bark(), 'Woof');
    assert.strictEqual(scoobydoo.bark(), 'Woof');
  });
});
