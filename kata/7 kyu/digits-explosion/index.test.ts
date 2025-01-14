import { describe, expect, it } from 'vitest';
import explode from './index.ts';

describe('explode', () => {
  it('should return digit by its value', () => {
    expect.assertions(5);

    expect(explode('312')).toBe('333122');
    expect(explode('102269')).toBe('12222666666999999999');
    expect(explode('0')).toBe('');
    expect(explode('000')).toBe('');
    expect(explode('123')).toBe('122333');
  });
});
