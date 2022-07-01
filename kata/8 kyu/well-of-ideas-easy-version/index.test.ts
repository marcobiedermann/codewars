import { expect } from 'vitest';
import well from '.';

describe('well', () => {
  it('should should check good ideas', () => {
    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe(
      'I smell a series!',
    );
  });
});
