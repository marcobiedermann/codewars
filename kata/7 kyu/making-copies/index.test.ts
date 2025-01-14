import { describe, expect, it } from 'vitest';
import copyList from './index.ts';

describe('copyList', () => {
  it('should create a copy', () => {
    expect.assertions(2);

    const t = [1, 2, 3, 4];
    const tCopy = copyList(t);

    expect(t).toStrictEqual(tCopy);
    t[1] += 5;
    expect(t).not.toStrictEqual(tCopy);
  });
});
