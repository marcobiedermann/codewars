import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import switchItUp from './index.ts';

describe('switchItUp', () => {
  it('should return number in words', () => {
    assert.strictEqual(switchItUp(1), 'One');
    assert.strictEqual(switchItUp(3), 'Three');
    assert.strictEqual(switchItUp(5), 'Five');
  });
});
