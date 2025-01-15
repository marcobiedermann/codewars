import assert from 'assert';
import { describe, it } from 'node:test';
import vaporcode from './index.ts';

describe('vaporcode', () => {
  it('should convert the sentence into a V A P O R W A V E sentence', () => {
    assert.strictEqual(
      vaporcode('Lets go to the movies'),
      'L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S',
    );
    assert.strictEqual(
      vaporcode('Why isnt my code working'),
      'W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G',
    );
  });
});
