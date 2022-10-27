import recycle from '.';

describe('recycle', () => {
  it('should recycle all materials into their bins', () => {
    expect.assertions(1);

    expect(
      recycle([
        { type: 'rotten apples', material: 'organic' },
        { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
        { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
        { type: 'amazon box', material: 'paper' },
        { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
      ]),
    ).toStrictEqual([
      ['wine bottle', 'amazon box', 'beer bottle'],
      ['wine bottle', 'beer bottle'],
      ['rotten apples', 'out of date yogurt'],
      ['out of date yogurt'],
    ]);
  });
});
