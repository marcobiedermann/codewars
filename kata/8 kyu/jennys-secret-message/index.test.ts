import greet from '.';

describe('jennygreet', () => {
  it('should greet some people normally', () => {
    expect.assertions(3);

    expect(greet('Jim')).toStrictEqual('Hello, Jim!');
    expect(greet('Jane')).toStrictEqual('Hello, Jane!');
    expect(greet('Simon')).toStrictEqual('Hello, Simon!');
  });

  it('should greet Johnny a little bit more special', () => {
    expect.assertions(1);

    expect(greet('Johnny')).toStrictEqual('Hello, my love!');
  });
});
