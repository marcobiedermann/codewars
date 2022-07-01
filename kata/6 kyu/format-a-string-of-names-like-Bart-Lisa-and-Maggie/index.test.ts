import { expect } from 'vitest';
import list from '.';

describe('list', () => {
  it('should separate names by comma, except for the last two', () => {
    expect(
      list([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' },
      ]),
    ).toBe('Bart, Lisa, Maggie, Homer & Marge');
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])).toBe(
      'Bart, Lisa & Maggie',
    );
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toBe('Bart & Lisa');
    expect(list([{ name: 'Bart' }])).toBe('Bart');
    expect(list([])).toBe('');
  });
});
