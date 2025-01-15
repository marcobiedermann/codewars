import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import DNAtoRNA from './index.ts';

describe('dNAtoRNA', () => {
  it('should convert DNA to RNA by replacing `T` by `U`', () => {
    assert.strictEqual(DNAtoRNA('TTTT'), 'UUUU');
    assert.strictEqual(DNAtoRNA('GCAT'), 'GCAU');
    assert.strictEqual(DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC');
  });
});
