import { describe, expect, it } from 'vitest';
import flyBy from './index.ts';

describe('flyBy', () => {
  it('should return the resulting `lamps` string', () => {
    expect.assertions(3);

    expect(flyBy('xxxxxx', '====T')).toBe('ooooox');
    expect(flyBy('xxxxxxxxx', '==T')).toBe('oooxxxxxx');
    expect(flyBy('xxxxxxxxxxxxxxx', '=========T')).toBe('ooooooooooxxxxx');
  });
});
