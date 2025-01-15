import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import oper, { horMirror, vertMirror } from './index.ts';

describe('opstrings', () => {
  it('basic tests vertMirror', () => {
    assert.strictEqual(
      oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu'),
      'QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw',
    );
    assert.strictEqual(
      oper(vertMirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx'),
      'EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP',
    );
  });

  it('basic tests horMirror', () => {
    assert.strictEqual(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt'), 'yeCt\nCSbg\nJVhv\nlVHt');
    assert.strictEqual(oper(horMirror, 'njMK\ndbrZ\nLPKo\ncEYz'), 'cEYz\nLPKo\ndbrZ\nnjMK');
  });
});
