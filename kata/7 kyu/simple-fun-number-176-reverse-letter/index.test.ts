import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverseLetter from './index.ts';

describe('reverseLetter', () => {
  it('should reverse string, ommitting all non-alphabetic characters', () => {
    assert.strictEqual(reverseLetter('krishan'), 'nahsirk');
    assert.strictEqual(reverseLetter('ultr53o?n'), 'nortlu');
    assert.strictEqual(reverseLetter('ab23c'), 'cba');
    assert.strictEqual(reverseLetter('krish21an'), 'nahsirk');
  });
});
