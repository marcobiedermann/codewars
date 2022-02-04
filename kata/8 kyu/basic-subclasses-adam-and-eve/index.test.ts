import God, { Man } from '.';

describe('god', () => {
  it('should return a man and woman', () => {
    expect.assertions(1);

    const humans = God.create();
    expect(humans[0]).toBeInstanceOf(Man);
  });
});
