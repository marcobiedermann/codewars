/* eslint-disable no-console */

import helloWorld from '.';

vi.spyOn(console, 'log').mockImplementation(() => ({}));

describe('helloWorld', () => {
  it('should define function `helloWorld`', () => {
    expect.assertions(2);

    helloWorld();

    expect(helloWorld).toBeDefined();
    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
