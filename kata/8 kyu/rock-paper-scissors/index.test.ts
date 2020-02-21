import rps from '.';

describe('rps', () => {
  const getMsg = (n: number): string => `Player ${n} won!`;

  it('player 1 win', () => {
    expect.assertions(3);

    expect(rps('rock', 'scissors')).toStrictEqual(getMsg(1));
    expect(rps('scissors', 'paper')).toStrictEqual(getMsg(1));
    expect(rps('paper', 'rock')).toStrictEqual(getMsg(1));
  });

  it('player 2 win', () => {
    expect.assertions(3);

    expect(rps('scissors', 'rock')).toStrictEqual(getMsg(2));
    expect(rps('paper', 'scissors')).toStrictEqual(getMsg(2));
    expect(rps('rock', 'paper')).toStrictEqual(getMsg(2));
  });

  it('draw', () => {
    expect.assertions(3);

    expect(rps('rock', 'rock')).toStrictEqual('Draw!');
    expect(rps('scissors', 'scissors')).toStrictEqual('Draw!');
    expect(rps('paper', 'paper')).toStrictEqual('Draw!');
  });
});
