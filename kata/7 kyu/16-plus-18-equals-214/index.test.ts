import add from '.';

describe('add', () => {
  it('real addition', () => {
    expect.assertions(3);

    expect(add(2, 11)).toBe(13);
    expect(add(0, 1)).toBe(1);
    expect(add(0, 0)).toBe(0);
  });

  it('silly addition', () => {
    expect.assertions(3);

    expect(add(16, 18)).toBe(214);
    expect(add(26, 39)).toBe(515);
    expect(add(122, 81)).toBe(1103);
  });

  it('big addition', () => {
    expect.assertions(4);

    expect(add(1222, 30277)).toBe(31499);
    expect(add(1236, 30977)).toBe(31111013);
    expect(add(38810, 1383)).toBe(391193);
    expect(add(49999, 49999)).toBe(818181818);
  });
});
