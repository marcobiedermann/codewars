import rentalCarCost from '.';

describe('Regular Tests:', () => {
  it('Should work for under 3 days:', () => {
    expect(rentalCarCost(1)).toEqual(40);
    expect(rentalCarCost(2)).toEqual(80);
  });
  it('Should work for under 7 days:', () => {
    expect(rentalCarCost(3)).toEqual(100);
    expect(rentalCarCost(4)).toEqual(140);
    expect(rentalCarCost(5)).toEqual(180);
    expect(rentalCarCost(6)).toEqual(220);
  });
  it('Should work for 7 or more days:', () => {
    expect(rentalCarCost(7)).toEqual(230);
    expect(rentalCarCost(8)).toEqual(270);
    expect(rentalCarCost(9)).toEqual(310);
    expect(rentalCarCost(10)).toEqual(350);
  });
});
