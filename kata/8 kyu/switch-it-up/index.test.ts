import switchItUp from '.';

describe('switchItUp', () => {
  it('should return number in words', () => {
    expect.assertions(3);

    expect(switchItUp(1)).toStrictEqual('One');
    expect(switchItUp(3)).toStrictEqual('Three');
    expect(switchItUp(5)).toStrictEqual('Five');
  });
});
