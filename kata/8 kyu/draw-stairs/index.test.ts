import drawStairs from '.';

describe('drawStairs', () => {
  it('Draw stairs with only 1 step', () => {
    expect(drawStairs(1)).toEqual('I');
  });

  it('Draw stairs with 3 steps', () => {
    expect(drawStairs(3)).toEqual('I\n I\n  I');
  });

  it('Draw stairs with 5 steps', () => {
    expect(drawStairs(5)).toEqual('I\n I\n  I\n   I\n    I');
  });
});
