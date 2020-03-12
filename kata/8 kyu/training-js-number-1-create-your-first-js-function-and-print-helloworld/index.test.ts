import helloWorld from '.';

describe('helloWorld', () => {
  it('should define function `helloWorld`', () => {
    expect.assertions(1);

    expect(helloWorld).toBeDefined();
  });
});
