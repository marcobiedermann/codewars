/* eslint-disable no-console */

import { describe, expect, it, vi } from 'vitest';
import Solution from '.';

vi.spyOn(console, 'log').mockImplementation(() => ({}));

describe('solution', () => {
  it('should log `Hello World!`', () => {
    expect.assertions(1);

    Solution.main();

    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
