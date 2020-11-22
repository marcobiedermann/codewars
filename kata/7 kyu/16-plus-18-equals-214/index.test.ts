import add from '.';

describe('add', () => {
  it('real addition', () => {
    expect.assertions(3);

    expect(add(2, 11)).toStrictEqual(13);
    expect(add(0, 1)).toStrictEqual(1);
    expect(add(0, 0)).toStrictEqual(0);
  });

  it('silly addition', () => {
    expect.assertions(3);

    expect(add(16, 18)).toStrictEqual(214);
    expect(add(26, 39)).toStrictEqual(515);
    expect(add(122, 81)).toStrictEqual(1103);
  });

  it('big addition', () => {
    expect.assertions(4);

    expect(add(1222, 30277)).toStrictEqual(31499);
    expect(add(1236, 30977)).toStrictEqual(31111013);
    expect(add(38810, 1383)).toStrictEqual(391193);
    expect(add(49999, 49999)).toStrictEqual(818181818);
  });
});
