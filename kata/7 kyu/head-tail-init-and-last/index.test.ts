import { head, init, last, tail } from '.';

describe('head, tail, init, last', () => {
  it('should get `head`, `tail`, `init` and `last` from array', () => {
    expect(head([5, 1])).toBe(5);
    expect(tail([1])).toStrictEqual([]);
    expect(init([1, 5, 7, 9])).toStrictEqual([1, 5, 7]);
    expect(last([7, 2])).toBe(2);
  });
});
