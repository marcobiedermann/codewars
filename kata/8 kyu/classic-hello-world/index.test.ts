/* eslint-disable no-console */

import Solution from '.';

jest.spyOn(console, 'log').mockImplementation();

describe('solution', () => {
  it('should log `Hello World!`', () => {
    expect.assertions(1);

    Solution.main();

    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
