import pillars from '.';

describe('pillars', () => {
  it('should calculate the distance between the first and the last pillar', () => {
    expect.assertions(3);

    expect(pillars(1, 10, 10)).toBe(0);
    expect(pillars(2, 20, 25)).toBe(2000);
    expect(pillars(11, 15, 30)).toBe(15270);
  });
});
