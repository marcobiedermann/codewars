import removeSmallest from '.';

describe('removeSmallest', () => {
  it('works for the examples', () => {
    expect.assertions(4);

    expect(removeSmallest([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
    expect(removeSmallest([5, 3, 2, 1, 4])).toStrictEqual([5, 3, 2, 4]);
    expect(removeSmallest([2, 2, 1, 2, 1])).toStrictEqual([2, 2, 2, 1]);
    expect(removeSmallest([])).toStrictEqual([]);
  });

  it('returns [] if the list has only one element', () => {
    expect.assertions(10);

    for (let i = 0; i < 10; i += 1) {
      const x = Math.floor(Math.random() * 400);

      expect(removeSmallest([x])).toStrictEqual([]);
    }
  });

  function randomArray(length: number): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * 400));
  }

  it('returns a list that misses only one element', () => {
    expect.assertions(10);

    for (let i = 0; i < 10; i += 1) {
      const arr = randomArray(Math.floor(Math.random() * 10) + 1);
      const l = arr.length;

      expect(removeSmallest(arr)).toHaveLength(l - 1);
    }
  });
});
