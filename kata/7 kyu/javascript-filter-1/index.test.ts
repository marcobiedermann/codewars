import { describe, expect, it } from 'vitest';
import searchNames from '.';

describe('searchNames', () => {
  it('should filter all login pairs that end with `_`', () => {
    expect.assertions(1);

    expect(
      searchNames([
        ['foo', 'foo@foo.com'],
        ['bar_', 'bar@bar.com'],
      ]),
    ).toStrictEqual([['bar_', 'bar@bar.com']]);
  });
});
