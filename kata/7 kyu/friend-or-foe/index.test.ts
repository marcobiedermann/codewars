import friend from '.';

describe('friend', () => {
  it('should filter names by length of 4', () => {
    expect(friend(['Ryan', 'Kieran', 'Mark'])).toEqual(['Ryan', 'Mark']);
    expect(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toEqual(['Ryan']);
    expect(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])).toEqual([
      'Jimm',
      'Cari',
      'aret',
    ]);
    expect(friend(['Love', 'Your', 'Face', '1'])).toEqual(['Love', 'Your', 'Face']);
  });
});
