import feast from '.';

describe('feast', () => {
  it('should check if beast is allowed to bring dish to feast', () => {
    expect(feast('great blue heron', 'garlic naan')).toEqual(true);
    expect(feast('chickadee', 'chocolate cake')).toEqual(true);
    expect(feast('brown bear', 'bear claw')).toEqual(false);
  });
});
