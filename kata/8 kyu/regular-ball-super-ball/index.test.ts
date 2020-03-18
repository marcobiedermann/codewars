import Ball from '.';

describe('ball', () => {
  it('should set `ballType` on instantiation', () => {
    expect.assertions(2);

    expect(new Ball().ballType).toStrictEqual('regular');
    expect(new Ball('super').ballType).toStrictEqual('super');
  });
});
