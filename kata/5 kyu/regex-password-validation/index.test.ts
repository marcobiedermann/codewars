import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import REGEXP from './index.ts';

describe('regexp', () => {
  it('should validate a password', () => {
    assert.strictEqual(REGEXP.test('fjd3IR9'), true);
    assert.strictEqual(REGEXP.test('ghdfj32'), false);
    assert.strictEqual(REGEXP.test('DSJKHD23'), false);
    assert.strictEqual(REGEXP.test('dsF43'), false);
    assert.strictEqual(REGEXP.test('4fdg5Fj3'), true);
    assert.strictEqual(REGEXP.test('DHSJdhjsU'), false);
    assert.strictEqual(REGEXP.test('fjd3IR9.;'), false);
    assert.strictEqual(REGEXP.test('fjd3  IR9'), false);
    assert.strictEqual(REGEXP.test('djI38D55'), true);
    assert.strictEqual(REGEXP.test('djI3_8D55'), false);
    assert.strictEqual(REGEXP.test('djI38D55@@'), false);
  });
});
