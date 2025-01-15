import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should', () => {
    assert.strictEqual(solve('zodiac'), 26);
    assert.strictEqual(solve('chruschtschov'), 80);
    assert.strictEqual(solve('khrushchev'), 38);
    assert.strictEqual(solve('strength'), 57);
    assert.strictEqual(solve('catchphrase'), 73);
    assert.strictEqual(solve('twelfthstreet'), 103);
    assert.strictEqual(solve('mischtschenkoana'), 80);
  });
});
