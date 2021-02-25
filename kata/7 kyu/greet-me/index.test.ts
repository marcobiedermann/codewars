import greet from '.';

describe('greet', () => {
  it('should greet and capitalize name', () => {
    expect.assertions(1);

    expect(greet('riley')).toStrictEqual('Hello Riley!');
  });
});
