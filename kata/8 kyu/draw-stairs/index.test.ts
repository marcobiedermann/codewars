import drawStairs from '.';

describe('drawStairs', () => {
  it('draw stairs with only 1 step', () => {
    expect.assertions(1);

    expect(drawStairs(1)).toStrictEqual('I');
  });

  it('draw stairs with 3 steps', () => {
    expect.assertions(1);

    expect(drawStairs(3)).toStrictEqual('I\n I\n  I');
  });

  it('draw stairs with 5 steps', () => {
    expect.assertions(1);

    expect(drawStairs(5)).toStrictEqual('I\n I\n  I\n   I\n    I');
  });
});
