import { expect } from 'vitest';
import opposite from '.';

describe('opposite', () => {
  it('should return its opposite', () => {
    expect(opposite(1)).toStrictEqual(-1);
  });
});
