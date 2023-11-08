import { describe, expect, it } from 'vitest';
import usdcny from '.';

describe('usdcny', () => {
  it('should convert US dollars to Chinese Yuan', () => {
    expect.assertions(2);

    expect(usdcny(15)).toBe('101.25 Chinese Yuan');
    expect(usdcny(465)).toBe('3138.75 Chinese Yuan');
  });
});
