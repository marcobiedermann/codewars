import litres from ".";

describe("liters", () => {
  it("should return number of liters", () => {
    expect(litres(2)).toEqual(1);
    expect(litres(1.4)).toEqual(0);
    expect(litres(12.3)).toEqual(6);
    expect(litres(0.82)).toEqual(0);
    expect(litres(11.8)).toEqual(5);
    expect(litres(1787)).toEqual(893);
    expect(litres(0)).toEqual(0);
  });
});
