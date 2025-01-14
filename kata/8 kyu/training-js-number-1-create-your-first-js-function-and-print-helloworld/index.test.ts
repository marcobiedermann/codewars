/* eslint-disable no-console */

import { describe, expect, it, vi } from 'vitest';
import helloWorld from './index.ts';

vi.spyOn(console, 'log').mockImplementation(() => ({}));

describe('helloWorld', () => {
  it('should define function `helloWorld`', () => {
    expect.assertions(2);

    helloWorld();

    expect(helloWorld).toBeDefined();
    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
