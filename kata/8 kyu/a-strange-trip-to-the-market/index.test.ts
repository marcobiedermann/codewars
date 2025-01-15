import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isLockNessMonster from './index.ts';

describe('isLockNessMonster', () => {
  it('should', () => {
    assert.strictEqual(
      isLockNessMonster('Your girlscout cookies are ready to ship. Your total comes to tree fiddy'),
      true,
    );
    assert.strictEqual(
      !isLockNessMonster(
        'Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.',
      ),
      true,
    );
  });
});
