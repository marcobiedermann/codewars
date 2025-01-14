import { describe, expect, it } from 'vitest';
import hoopCount from './index.ts';

describe('hoopCount', () => {
  it('should return an encouraging message', () => {
    expect.assertions(2);

    expect(hoopCount(3)).toBe('Keep at it until you get it');
    expect(hoopCount(11)).toBe('Great, now move on to tricks');
  });
});
