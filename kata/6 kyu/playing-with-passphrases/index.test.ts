import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import playPass from './index.ts';

describe('playPass', () => {
  it('should return the passphrase', () => {
    assert.strictEqual(playPass('I LOVE YOU!!!', 1), '!!!vPz fWpM J');
    assert.strictEqual(
      playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2),
      '4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO',
    );
  });
});
