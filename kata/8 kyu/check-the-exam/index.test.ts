import checkExam from '.';

describe('checkExam', () => {
  it('should calculate score of exam', () => {
    expect.assertions(4);

    expect(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])).toStrictEqual(6);
    expect(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])).toStrictEqual(7);
    expect(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])).toStrictEqual(16);
    expect(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])).toStrictEqual(0);
  });
});
