import friend from '.';

describe('friend', () => {
  it('should filter names by length of 4', () => {
    expect.assertions(4);

    expect(friend(['Ryan', 'Kieran', 'Mark'])).toStrictEqual(['Ryan', 'Mark']);
    expect(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toStrictEqual(['Ryan']);
    expect(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])).toStrictEqual([
      'Jimm',
      'Cari',
      'aret',
    ]);
    expect(friend(['Love', 'Your', 'Face', '1'])).toStrictEqual(['Love', 'Your', 'Face']);
  });
});
