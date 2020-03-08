import twiceAsOld from '.';

describe('twiceAsOld', () => {
  it("testing for dad's age: 36 and son's age: 7", () => {
    expect.assertions(1);

    expect(twiceAsOld(36, 7)).toStrictEqual(22);
  });

  it("testing for dad's age: 55 and son's age: 30", () => {
    expect.assertions(1);

    expect(twiceAsOld(55, 30)).toStrictEqual(5);
  });

  it("testing for dad's age: 42 and son's age: 21", () => {
    expect.assertions(1);

    expect(twiceAsOld(42, 21)).toStrictEqual(0);
  });

  it("testing for dad's age: 22 and son's age: 1", () => {
    expect.assertions(1);

    expect(twiceAsOld(22, 1)).toStrictEqual(20);
  });

  it("testing for dad's age: 29 and son's age: 0", () => {
    expect.assertions(1);

    expect(twiceAsOld(29, 0)).toStrictEqual(29);
  });
});
