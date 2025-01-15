import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import rot13 from './index.ts';

describe('rot13', () => {
  it('should rotate a string by 13 characters', () => {
    assert.strictEqual(rot13('EBG13 rknzcyr.'), 'ROT13 example.');
    assert.strictEqual(
      rot13('This is my first ROT13 excercise!'),
      'Guvf vf zl svefg EBG13 rkprepvfr!',
    );
  });
});
