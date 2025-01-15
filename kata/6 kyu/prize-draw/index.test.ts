import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import rank from './index.ts';

describe('rank', () => {
  it('should return the firstname of the participant at rank `n`', () => {
    assert.strictEqual(
      rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4),
      'Benjamin',
    );
    assert.strictEqual(rank('Lagon,Lily', [1, 5], 2), 'Lagon');
    assert.strictEqual(
      rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 8),
      'Not enough participants',
    );
    assert.strictEqual(rank('', [4, 2, 1, 4, 3, 1, 2], 6), 'No participants');
  });
});
