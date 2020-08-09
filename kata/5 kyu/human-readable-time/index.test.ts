import humanReadable from '.';

describe('humanReadable', () => {
  it('should return the time in a human-readable format', () => {
    expect.assertions(5);

    expect(humanReadable(0)).toStrictEqual('00:00:00');
    expect(humanReadable(5)).toStrictEqual('00:00:05');
    expect(humanReadable(60)).toStrictEqual('00:01:00');
    expect(humanReadable(86399)).toStrictEqual('23:59:59');
    expect(humanReadable(359999)).toStrictEqual('99:59:59');
  });
});
