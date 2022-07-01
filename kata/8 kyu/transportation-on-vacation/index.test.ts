import rentalCarCost from '.';

describe('regular Tests:', () => {
  it('should work for under 3 days:', () => {
    expect(rentalCarCost(1)).toBe(40);
    expect(rentalCarCost(2)).toBe(80);
  });

  it('should work for under 7 days:', () => {
    expect(rentalCarCost(3)).toBe(100);
    expect(rentalCarCost(4)).toBe(140);
    expect(rentalCarCost(5)).toBe(180);
    expect(rentalCarCost(6)).toBe(220);
  });
  it('should work for 7 or more days:', () => {
    expect(rentalCarCost(7)).toBe(230);
    expect(rentalCarCost(8)).toBe(270);
    expect(rentalCarCost(9)).toBe(310);
    expect(rentalCarCost(10)).toBe(350);
  });
});
