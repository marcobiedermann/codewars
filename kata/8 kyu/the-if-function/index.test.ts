/* eslint-disable no-console */

import { describe, expect, it, vi } from 'vitest';
import _if from './index.ts';

vi.spyOn(console, 'log').mockImplementation(() => ({}));

describe('_if', () => {
  it('should call `func1` when `bool` is truthy, otherwise `func2`', () => {
    expect.assertions(2);

    _if(
      true,
      () => {
        console.log('True');
      },
      () => {
        console.log('false');
      },
    );
    expect(_if).toBeDefined();
    expect(console.log).toHaveBeenCalledWith('True');
  });
});
