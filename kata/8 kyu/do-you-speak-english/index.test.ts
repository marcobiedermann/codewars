import { describe, expect, it } from 'vitest';
import spEng from './index.ts';

describe('spEng', () => {
  it('should check is sentence contains `english`', () => {
    expect.assertions(2);

    expect(spEng('english')).toBe(true);
    expect(spEng('egnlish')).toBe(false);
  });
});
