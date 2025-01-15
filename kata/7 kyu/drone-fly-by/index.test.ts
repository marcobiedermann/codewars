import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import flyBy from './index.ts';

describe('flyBy', () => {
  it('should return the resulting `lamps` string', () => {
    assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
    assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx');
    assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx');
  });
});
