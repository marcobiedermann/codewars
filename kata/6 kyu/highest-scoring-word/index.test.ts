import { describe, expect, it } from 'vitest';
import high from './index.ts';

describe('high', () => {
  it('should return highest scoring word', () => {
    expect.assertions(3);

    expect(high('man i need a taxi up to ubud')).toBe('taxi');
    expect(high('what time are we climbing up the volcano')).toBe('volcano');
    expect(high('take me to semynak')).toBe('semynak');
  });
});
