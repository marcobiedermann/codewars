import { describe, expect, it } from 'vitest';
import inviteMoreWomen from './index.ts';

describe('inviteMoreWomen', () => {
  it('should check if Arthur needs to invite more women', () => {
    expect.assertions(4);

    expect(inviteMoreWomen([1, -1, 1])).toBe(true);
    expect(inviteMoreWomen([1, 1, 1])).toBe(true);
    expect(inviteMoreWomen([-1, -1, -1])).toBe(false);
    expect(inviteMoreWomen([1, -1])).toBe(false);
  });
});
