import { describe, expect, it } from 'vitest';
import vaporcode from './index.ts';

describe('vaporcode', () => {
  it('should convert the sentence into a V A P O R W A V E sentence', () => {
    expect.assertions(2);

    expect(vaporcode('Lets go to the movies')).toBe(
      'L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S',
    );
    expect(vaporcode('Why isnt my code working')).toBe(
      'W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G',
    );
  });
});
