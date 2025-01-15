import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import correct from './index.ts';

describe('correct', () => {
  it('should correct errors in text', () => {
    assert.strictEqual(correct('L0ND0N'), 'LONDON');
    assert.strictEqual(correct('DUBL1N'), 'DUBLIN');
    assert.strictEqual(correct('51NGAP0RE'), 'SINGAPORE');
    assert.strictEqual(correct('BUDAPE5T'), 'BUDAPEST');
    assert.strictEqual(correct('PAR15'), 'PARIS');
  });
});
