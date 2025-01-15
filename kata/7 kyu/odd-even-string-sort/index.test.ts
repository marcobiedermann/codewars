import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sortMyString from './index.ts';

describe('sortMyString', () => {
  it('should group characters by even and odd index', () => {
    assert.strictEqual(sortMyString('CodeWars'), 'CdWr oeas');
    assert.strictEqual(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");
  });
});
