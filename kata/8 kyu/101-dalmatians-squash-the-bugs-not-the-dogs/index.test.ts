import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import howManyDalmatians from './index.ts';

describe('howManyDalmatians', () => {
  it('should return amount of dogs', () => {
    assert.strictEqual(howManyDalmatians(26), 'More than a handful!');
    assert.strictEqual(howManyDalmatians(8), 'Hardly any');
    assert.strictEqual(howManyDalmatians(14), 'More than a handful!');
    assert.strictEqual(howManyDalmatians(80), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(100), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(101), '101 DALMATIANS!!!');
  });
});
