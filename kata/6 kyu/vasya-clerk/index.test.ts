import { describe, expect, it } from 'vitest';
import tickets from '.';

describe('tickets', () => {
  it('should return `YES` if you can sell a ticket to every person', () => {
    expect.assertions(3);

    expect(tickets([25, 25, 50, 50])).toBe('YES');
    expect(tickets([25, 100])).toBe('NO');
    expect(tickets([25, 25, 25, 25, 25, 100, 100])).toBe('NO');
  });
});
