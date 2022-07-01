import God, { Man } from '.';

describe('god', () => {
  it('should return a man and woman', () => {
    const humans = God.create();
    expect(humans[0]).toBeInstanceOf(Man);
  });
});
