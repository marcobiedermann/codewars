import warnTheSheep from '.';

describe('warnTheSheep', () => {
  it('should warn sheep in front of wolf', () => {
    expect.assertions(5);

    expect(
      warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']),
    ).toStrictEqual('Oi! Sheep number 2! You are about to be eaten by a wolf!');
    expect(
      warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
    ).toStrictEqual('Oi! Sheep number 5! You are about to be eaten by a wolf!');
    expect(
      warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
    ).toStrictEqual('Oi! Sheep number 6! You are about to be eaten by a wolf!');
    expect(warnTheSheep(['sheep', 'wolf', 'sheep'])).toStrictEqual(
      'Oi! Sheep number 1! You are about to be eaten by a wolf!',
    );
    expect(warnTheSheep(['sheep', 'sheep', 'wolf'])).toStrictEqual(
      'Pls go away and stop eating my sheep',
    );
  });
});
