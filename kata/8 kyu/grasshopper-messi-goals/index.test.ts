import { describe, expect, it } from 'vitest';
import totalGoals from './index.ts';

describe('totalGoals', () => {
  it('should sum the goals Messi scored', () => {
    expect.assertions(1);

    expect(totalGoals).toBe(58);
  });
});
