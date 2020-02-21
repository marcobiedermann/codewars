import feast from '.';

describe('feast', () => {
  it('should check if beast is allowed to bring dish to feast', () => {
    expect.assertions(3);

    expect(feast('great blue heron', 'garlic naan')).toStrictEqual(true);
    expect(feast('chickadee', 'chocolate cake')).toStrictEqual(true);
    expect(feast('brown bear', 'bear claw')).toStrictEqual(false);
  });
});
