import elevator from '.';

describe('elevator', () => {
  it("if the left elevator is closer to the call, should return 'left'", () => {
    expect.assertions(1);

    expect(elevator(0, 1, 0)).toStrictEqual('left');
  });

  it("if the right elevator is closer to the call, should return 'right'", () => {
    expect.assertions(2);

    expect(elevator(0, 1, 1)).toStrictEqual('right');
    expect(elevator(0, 1, 2)).toStrictEqual('right');
  });

  it("if both elevators are on the same floor, should return 'right'", () => {
    expect.assertions(1);

    expect(elevator(0, 0, 0)).toStrictEqual('right');
  });

  it("if both elevators are in equal distance from the call, should return 'right'", () => {
    expect.assertions(1);

    expect(elevator(0, 2, 1)).toStrictEqual('right');
  });
});
