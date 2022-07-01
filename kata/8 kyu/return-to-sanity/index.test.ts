import { expect } from 'vitest';
import mystery from '.';

describe('mystery', () => {
  it('should return an object', () => {
    expect(mystery()).toStrictEqual({
      sanity: 'Hello',
    });
  });
});
