import sayHello from '.';

describe('sayHello', () => {
  it('should should say hello to name passed in', () => {
    expect.assertions(4);

    expect(sayHello('Mr. Spock')).toStrictEqual('Hello, Mr. Spock');
    expect(sayHello('Captain Kirk')).toStrictEqual('Hello, Captain Kirk');
    expect(sayHello('Liutenant Uhura')).toStrictEqual('Hello, Liutenant Uhura');
    expect(sayHello('Dr. McCoy')).toStrictEqual('Hello, Dr. McCoy');
  });
});
