import { expect } from 'vitest';
import inviteMoreWomen from '.';

describe('inviteMoreWomen', () => {
  it('should check if Arthur needs to invite more women', () => {
    expect(inviteMoreWomen([1, -1, 1])).toBe(true);
    expect(inviteMoreWomen([1, 1, 1])).toBe(true);
    expect(inviteMoreWomen([-1, -1, -1])).toBe(false);
    expect(inviteMoreWomen([1, -1])).toBe(false);
  });
});
