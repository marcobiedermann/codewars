/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import trueOrFalse from './index.ts';

describe('trueOrFalse', () => {
  it('should test for equations and inequalities', () => {
    const a = 1;
    const b = 2;
    const c = 1;

    assert.strictEqual(trueOrFalse(a > b), 'false');
    assert.strictEqual(trueOrFalse(a === b), 'false');
    assert.strictEqual(trueOrFalse(a < b), 'true');
    assert.strictEqual(trueOrFalse(a !== b), 'true');
    assert.strictEqual(trueOrFalse(b > c), 'true');
    assert.strictEqual(trueOrFalse(b === c), 'false');
    assert.strictEqual(trueOrFalse(b < c), 'false');
    assert.strictEqual(trueOrFalse(b !== c), 'true');
    assert.strictEqual(trueOrFalse(a === c), 'true');
    assert.strictEqual(trueOrFalse(a !== c), 'false');
  });

  it('should test for logical operators and bitwise operators', () => {
    const t = true;
    const f = false;

    assert.strictEqual(trueOrFalse(t && f), 'false');
    assert.strictEqual(trueOrFalse(f && f), 'false');
    assert.strictEqual(trueOrFalse(t && t), 'true');
    assert.strictEqual(trueOrFalse(t || f), 'true');
    assert.strictEqual(trueOrFalse(t || t), 'true');
    assert.strictEqual(trueOrFalse(f || f), 'false');
    assert.strictEqual(trueOrFalse(t & f), 'false');
    assert.strictEqual(trueOrFalse(t & t), 'true');
    assert.strictEqual(trueOrFalse(f & f), 'false');
    assert.strictEqual(trueOrFalse(t | f), 'true');
    assert.strictEqual(trueOrFalse(t | t), 'true');
    assert.strictEqual(trueOrFalse(f | f), 'false');
    assert.strictEqual(trueOrFalse(!t), 'false');
    assert.strictEqual(trueOrFalse(!f), 'true');
    assert.strictEqual(trueOrFalse(t ^ f), 'true');
    assert.strictEqual(trueOrFalse(t ^ t), 'false');
    assert.strictEqual(trueOrFalse(f ^ f), 'false');
  });

  it('should test for implicit conversion', () => {
    assert.strictEqual(trueOrFalse(true), 'true');
    assert.strictEqual(trueOrFalse(123), 'true');
    assert.strictEqual(trueOrFalse('123'), 'true');
    assert.strictEqual(trueOrFalse(['123']), 'true');
    assert.strictEqual(trueOrFalse('false'), 'true');
    assert.strictEqual(trueOrFalse(false), 'false');
    assert.strictEqual(trueOrFalse(0), 'false');
    assert.strictEqual(trueOrFalse(''), 'false');
    assert.strictEqual(trueOrFalse(null), 'false');
    assert.strictEqual(trueOrFalse([].length), 'false');
    assert.strictEqual(trueOrFalse(undefined), 'false');
  });
});
