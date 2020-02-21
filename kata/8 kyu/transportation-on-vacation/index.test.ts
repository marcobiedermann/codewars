import rentalCarCost from '.';

describe('regular Tests:', () => {
  it('should work for under 3 days:', () => {
    expect.assertions(2);

    expect(rentalCarCost(1)).toStrictEqual(40);
    expect(rentalCarCost(2)).toStrictEqual(80);
  });

  it('should work for under 7 days:', () => {
    expect.assertions(4);

    expect(rentalCarCost(3)).toStrictEqual(100);
    expect(rentalCarCost(4)).toStrictEqual(140);
    expect(rentalCarCost(5)).toStrictEqual(180);
    expect(rentalCarCost(6)).toStrictEqual(220);
  });
  it('should work for 7 or more days:', () => {
    expect.assertions(4);

    expect(rentalCarCost(7)).toStrictEqual(230);
    expect(rentalCarCost(8)).toStrictEqual(270);
    expect(rentalCarCost(9)).toStrictEqual(310);
    expect(rentalCarCost(10)).toStrictEqual(350);
  });
});
