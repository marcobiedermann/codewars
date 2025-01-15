import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import revrot from './index.ts';

describe('revrot', () => {
  it('should reverse or rotate string', () => {
    assert.strictEqual(revrot('1234', 0), '');
    assert.strictEqual(revrot('', 0), '');
    assert.strictEqual(revrot('1234', 5), '');
    assert.strictEqual(revrot('733049910872815764', 5), '330479108928157');
    assert.strictEqual(
      revrot('312084788360207597307420780249195813555836722615615827889419652061022081907', 8),
      '120847833602075802470379919420878555318551622763158278860256914918022016',
    );
  });
});
