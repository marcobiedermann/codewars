import f from '.';

describe('f', () => {
  it('should sum up all number through `n`', () => {
    expect.assertions(8);

    expect(f(100)).toStrictEqual(5050);
    expect(f(300)).toStrictEqual(45150);
    expect(f(50000)).toStrictEqual(1250025000);
    expect(f('n')).toStrictEqual(false);
    expect(f()).toStrictEqual(false);
    expect(f(3.14)).toStrictEqual(false);
    expect(f(0)).toStrictEqual(false);
    expect(f(-10)).toStrictEqual(false);
  });
});
