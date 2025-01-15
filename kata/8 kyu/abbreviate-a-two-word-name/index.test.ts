import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import abbrevName from './index.ts';

describe('abbrevName', () => {
  it('should return two capital letters with a dot separating them', () => {
    assert.strictEqual(abbrevName('Sam Harris'), 'S.H');
    assert.strictEqual(abbrevName('Patrick Feenan'), 'P.F');
    assert.strictEqual(abbrevName('Evan Cole'), 'E.C');
    assert.strictEqual(abbrevName('P Favuzzi'), 'P.F');
    assert.strictEqual(abbrevName('David Mendieta'), 'D.M');
  });
});
