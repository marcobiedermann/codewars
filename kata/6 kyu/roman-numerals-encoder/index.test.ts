import solution from '.';

describe('solution', () => {
  it('should handle small numbers', () => {
    expect.assertions(11);

    expect(solution(1)).toStrictEqual('I');
    expect(solution(2)).toStrictEqual('II');
    expect(solution(3)).toStrictEqual('III');
    expect(solution(4)).toStrictEqual('IV');
    expect(solution(5)).toStrictEqual('V');
    expect(solution(9)).toStrictEqual('IX');
    expect(solution(10)).toStrictEqual('X');
    expect(solution(11)).toStrictEqual('XI');
    expect(solution(19)).toStrictEqual('XIX');
    expect(solution(22)).toStrictEqual('XXII');
    expect(solution(15)).toStrictEqual('XV');
  });

  it('should handle large numbers', () => {
    expect.assertions(5);

    expect(solution(1000)).toStrictEqual('M');
    expect(solution(1001)).toStrictEqual('MI');
    expect(solution(1990)).toStrictEqual('MCMXC');
    expect(solution(2007)).toStrictEqual('MMVII');
    expect(solution(2008)).toStrictEqual('MMVIII');
  });
});
