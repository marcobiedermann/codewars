import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import repeatStr from './index.ts';

describe('repeatStr', () => {
  it('should repeat string by count', () => {
    assert.strictEqual(repeatStr(3, '*'), '***');
    assert.strictEqual(repeatStr(5, '#'), '#####');
    assert.strictEqual(repeatStr(2, 'ha '), 'ha ha ');
  });
});
