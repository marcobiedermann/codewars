import { expect } from 'vitest';
import totalGoals from '.';

describe('totalGoals', () => {
  it('should sum the goals Messi scored', () => {
    expect(totalGoals).toBe(58);
  });
});
