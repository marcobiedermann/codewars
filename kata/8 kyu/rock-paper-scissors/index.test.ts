import rps from '.';

describe('rps', () => {
  const getMsg = (n: number): string => `Player ${n} won!`;

  it('player 1 win', () => {
    expect(rps('rock', 'scissors')).toEqual(getMsg(1));
    expect(rps('scissors', 'paper')).toEqual(getMsg(1));
    expect(rps('paper', 'rock')).toEqual(getMsg(1));
  });

  it('player 2 win', () => {
    expect(rps('scissors', 'rock')).toEqual(getMsg(2));
    expect(rps('paper', 'scissors')).toEqual(getMsg(2));
    expect(rps('rock', 'paper')).toEqual(getMsg(2));
  });

  it('draw', () => {
    expect(rps('rock', 'rock')).toEqual('Draw!');
    expect(rps('scissors', 'scissors')).toEqual('Draw!');
    expect(rps('paper', 'paper')).toEqual('Draw!');
  });
});
