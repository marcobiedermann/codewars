import { describe, expect, it } from 'vitest';
import mystery from './index.ts';

describe('mystery', () => {
  it('should return an object', () => {
    expect.assertions(1);

    expect(mystery()).toStrictEqual({
      sanity: 'Hello',
    });
  });
});
