import { describe, expect, it } from 'vitest';
import totalGoals from '.';

describe('totalGoals', () => {
  it('should sum the goals Messi scored', () => {
    expect.assertions(1);

    expect(totalGoals).toBe(58);
  });
});
