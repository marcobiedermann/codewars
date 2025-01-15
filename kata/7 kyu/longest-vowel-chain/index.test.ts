import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should find the longest vowel chain', () => {
    assert.strictEqual(solve('codewarriors'), 2);
    assert.strictEqual(solve('suoidea'), 3);
    assert.strictEqual(solve('ultrarevolutionariees'), 3);
    assert.strictEqual(solve('strengthlessnesses'), 1);
    assert.strictEqual(solve('cuboideonavicuare'), 2);
    assert.strictEqual(solve('chrononhotonthuooaos'), 5);
    assert.strictEqual(solve('iiihoovaeaaaoougjyaw'), 8);
  });
});
