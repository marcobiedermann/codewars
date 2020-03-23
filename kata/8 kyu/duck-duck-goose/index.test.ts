import duckDuckGoose, { Player } from '.';

const exNames = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
const players = exNames.map((n) => new Player(n));

describe('duckDuckGoose', () => {
  it('should find the correct goose', () => {
    expect.assertions(10);

    expect(duckDuckGoose(players, 1)).toStrictEqual('a');
    expect(duckDuckGoose(players, 3)).toStrictEqual('c');
    expect(duckDuckGoose(players, 10)).toStrictEqual('z');
    expect(duckDuckGoose(players, 20)).toStrictEqual('z');
    expect(duckDuckGoose(players, 30)).toStrictEqual('z');
    expect(duckDuckGoose(players, 18)).toStrictEqual('g');
    expect(duckDuckGoose(players, 28)).toStrictEqual('g');
    expect(duckDuckGoose(players, 12)).toStrictEqual('b');
    expect(duckDuckGoose(players, 2)).toStrictEqual('b');
    expect(duckDuckGoose(players, 7)).toStrictEqual('f');
  });
});
