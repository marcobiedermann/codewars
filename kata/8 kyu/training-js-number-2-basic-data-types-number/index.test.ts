import { equal1, equal2, equal3, equal4, equal5 } from '.';

describe('equal', () => {
  it('should equal to 100', () => {
    expect.assertions(5);

    expect(equal1()).toStrictEqual(100);
    expect(equal2()).toStrictEqual(100);
    expect(equal3()).toStrictEqual(100);
    expect(equal4()).toStrictEqual(100);
    expect(equal5()).toStrictEqual(100);
  });
});
