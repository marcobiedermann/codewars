import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import repeater from './index.ts';

describe('repeater', () => {
  it('should repeat string `n` times', () => {
    assert.strictEqual(repeater('a', 5), 'aaaaa');
    assert.strictEqual(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
    assert.strictEqual(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ');
  });
});
