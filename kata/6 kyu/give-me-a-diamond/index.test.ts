import diamond from '.';

describe('diamond', () => {
  it('should print diamond', () => {
    expect.assertions(6);

    expect(diamond(1)).toStrictEqual('*\n');
    expect(diamond(3)).toStrictEqual(' *\n***\n *\n');
    expect(diamond(5)).toStrictEqual('  *\n ***\n*****\n ***\n  *\n');
    expect(diamond(2)).toBeNull();
    expect(diamond(-3)).toBeNull();
    expect(diamond(0)).toBeNull();
  });
});
