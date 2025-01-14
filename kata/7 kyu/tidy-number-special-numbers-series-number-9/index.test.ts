import { describe, expect, it } from 'vitest';
import tidyNumber from './index.ts';

describe('tidyNumber', () => {
  it('should check if the number is a tidy number', () => {
    expect.assertions(5);

    expect(tidyNumber(12)).toBe(true);
    expect(tidyNumber(102)).toBe(false);
    expect(tidyNumber(9672)).toBe(false);
    expect(tidyNumber(2789)).toBe(true);
    expect(tidyNumber(2335)).toBe(true);
  });
});
