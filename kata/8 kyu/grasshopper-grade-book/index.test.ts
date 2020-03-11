import getGrade from '.';

describe('getGrade', () => {
  it('should return an A', () => {
    expect.assertions(3);

    expect(getGrade(95, 90, 93)).toStrictEqual('A');
    expect(getGrade(100, 85, 96)).toStrictEqual('A');
    expect(getGrade(92, 93, 94)).toStrictEqual('A');
  });

  it('should return a B', () => {
    expect.assertions(4);

    expect(getGrade(70, 70, 100)).toStrictEqual('B');
    expect(getGrade(82, 85, 87)).toStrictEqual('B');
    expect(getGrade(84, 79, 85)).toStrictEqual('B');
    expect(getGrade(89, 89, 90)).toStrictEqual('B');
  });

  it('should return a C', () => {
    expect.assertions(3);

    expect(getGrade(70, 70, 70)).toStrictEqual('C');
    expect(getGrade(75, 70, 79)).toStrictEqual('C');
    expect(getGrade(60, 82, 76)).toStrictEqual('C');
  });

  it('should return a D', () => {
    expect.assertions(3);

    expect(getGrade(65, 70, 59)).toStrictEqual('D');
    expect(getGrade(66, 62, 68)).toStrictEqual('D');
    expect(getGrade(58, 62, 70)).toStrictEqual('D');
  });

  it('should return an F', () => {
    expect.assertions(3);

    expect(getGrade(44, 55, 52)).toStrictEqual('F');
    expect(getGrade(48, 55, 52)).toStrictEqual('F');
    expect(getGrade(58, 59, 60)).toStrictEqual('F');
  });
});
