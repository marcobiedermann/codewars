import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import printerError from './index.ts';

describe('printerError', () => {
  it('should print number of errors', () => {
    assert.strictEqual(
      printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'),
      '3/56',
    );
  });
});
