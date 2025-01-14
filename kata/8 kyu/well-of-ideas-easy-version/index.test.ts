import { describe, expect, it } from 'vitest';
import well from './index.ts';

describe('well', () => {
  it('should should check good ideas', () => {
    expect.assertions(3);

    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe(
      'I smell a series!',
    );
  });
});
