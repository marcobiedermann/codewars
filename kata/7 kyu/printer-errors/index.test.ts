import { describe, expect, it } from 'vitest';
import printerError from '.';

describe('printerError', () => {
  it('should print number of errors', () => {
    expect.assertions(1);

    expect(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')).toBe('3/56');
  });
});
