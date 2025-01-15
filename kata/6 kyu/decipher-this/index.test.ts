import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import decipherThis from './index.ts';

describe('decipherThis', () => {
  it('should decrypt the message', () => {
    assert.strictEqual(
      decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'),
      'Have a go at this and see how you do',
    );
  });
});
