import whatday from '.';

describe('whatday', () => {
  it('should return the weekday', () => {
    expect.assertions(5);

    expect(whatday(1)).toStrictEqual('Sunday');
    expect(whatday(2)).toStrictEqual('Monday');
    expect(whatday(3)).toStrictEqual('Tuesday');
    expect(whatday(8)).toStrictEqual('Wrong, please enter a number between 1 and 7');
    expect(whatday(20)).toStrictEqual('Wrong, please enter a number between 1 and 7');
  });
});
