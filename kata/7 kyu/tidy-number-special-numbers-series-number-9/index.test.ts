import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import tidyNumber from './index.ts';

describe('tidyNumber', () => {
  it('should check if the number is a tidy number', () => {
    assert.strictEqual(tidyNumber(12), true);
    assert.strictEqual(tidyNumber(102), false);
    assert.strictEqual(tidyNumber(9672), false);
    assert.strictEqual(tidyNumber(2789), true);
    assert.strictEqual(tidyNumber(2335), true);
  });
});
