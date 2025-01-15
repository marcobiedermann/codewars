import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import mouthSize from './index.ts';

describe('mouthSize', () => {
  it('should return mouth size of frog', () => {
    assert.strictEqual(mouthSize('toucan'), 'wide');
    assert.strictEqual(mouthSize('ant bear'), 'wide');
    assert.strictEqual(mouthSize('alligator'), 'small');
  });
});
