import queueTime from '.';

describe('queueTime', () => {
  it('should calculate total time of queues', () => {
    expect.assertions(4);

    expect(queueTime([], 1)).toStrictEqual(0);
    expect(queueTime([1, 2, 3, 4], 1)).toStrictEqual(10);
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toStrictEqual(9);
    expect(queueTime([1, 2, 3, 4, 5], 100)).toStrictEqual(5);
  });
});
