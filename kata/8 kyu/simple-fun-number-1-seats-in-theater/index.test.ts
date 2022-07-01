import seatsInTheater from '.';

describe('seatsInTheater', () => {
  it('should number of people sitting behind and to your left', () => {
    expect(seatsInTheater(16, 11, 5, 3)).toBe(96);
    expect(seatsInTheater(1, 1, 1, 1)).toBe(0);
    expect(seatsInTheater(13, 6, 8, 3)).toBe(18);
    expect(seatsInTheater(60, 100, 60, 1)).toBe(99);
    expect(seatsInTheater(1000, 1000, 1000, 1000)).toBe(0);
  });
});
