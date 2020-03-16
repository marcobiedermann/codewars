import howManyDalmatians from '.';

describe('howManyDalmatians', () => {
  it('should return amount of dogs', () => {
    expect.assertions(6);

    expect(howManyDalmatians(26)).toStrictEqual('More than a handful!');
    expect(howManyDalmatians(8)).toStrictEqual('Hardly any');
    expect(howManyDalmatians(14)).toStrictEqual('More than a handful!');
    expect(howManyDalmatians(80)).toStrictEqual("Woah that's a lot of dogs!");
    expect(howManyDalmatians(100)).toStrictEqual("Woah that's a lot of dogs!");
    expect(howManyDalmatians(101)).toStrictEqual('101 DALMATIANS!!!');
  });
});
