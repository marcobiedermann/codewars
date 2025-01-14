import { describe, expect, it } from 'vitest';
import rot13 from './index.ts';

describe('rot13', () => {
  it('should rotate letters in string', () => {
    expect.assertions(2);

    expect(rot13('test')).toBe('grfg');
    expect(rot13('Test')).toBe('Grfg');
  });
});
