import solve from '.';

describe('solve', () => {
  it('should reverse string while keeping position of spaces', () => {
    expect.assertions(4);

    expect(solve('codewars')).toStrictEqual('srawedoc');
    expect(solve('your code')).toStrictEqual('edoc ruoy');
    expect(solve('your code rocks')).toStrictEqual('skco redo cruoy');
    expect(solve('i love codewars')).toStrictEqual('s rawe docevoli');
  });
});
