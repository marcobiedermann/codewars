import remove from '.';

describe('remove', () => {
  it('should remove n amount of exclamatin marks', () => {
    expect.assertions(11);

    expect(remove('Hi!', 1)).toStrictEqual('Hi');
    expect(remove('Hi!', 100)).toStrictEqual('Hi');
    expect(remove('Hi!!!', 1)).toStrictEqual('Hi!!');
    expect(remove('Hi!!!', 100)).toStrictEqual('Hi');
    expect(remove('!Hi', 1)).toStrictEqual('Hi');
    expect(remove('!Hi!', 1)).toStrictEqual('Hi!');
    expect(remove('!Hi!', 100)).toStrictEqual('Hi');
    expect(remove('!!!Hi !!hi!!! !hi', 1)).toStrictEqual('!!Hi !!hi!!! !hi');
    expect(remove('!!!Hi !!hi!!! !hi', 3)).toStrictEqual('Hi !!hi!!! !hi');
    expect(remove('!!!Hi !!hi!!! !hi', 5)).toStrictEqual('Hi hi!!! !hi');
    expect(remove('!!!Hi !!hi!!! !hi', 100)).toStrictEqual('Hi hi hi');
  });
});
