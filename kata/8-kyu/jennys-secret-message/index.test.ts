import greet from '.';

describe('Jennygreet', () => {
  it('should greet some people normally', () => {
    expect(greet('Jim')).toEqual('Hello, Jim!');
    expect(greet('Jane')).toEqual('Hello, Jane!');
    expect(greet('Simon')).toEqual('Hello, Simon!');
  });

  it('should greet Johnny a little bit more special', () => {
    expect(greet('Johnny')).toEqual('Hello, my love!');
  });
});
