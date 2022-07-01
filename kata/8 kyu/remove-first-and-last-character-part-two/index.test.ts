import array from '.';

describe('array', () => {
  it('should remove the first and last character', () => {
    expect(array('1,2,3')).toBe('2');
    expect(array('1,2,3,4')).toBe('2 3');
    expect(array('1,2,3,4,5')).toBe('2 3 4');
  });
  it('should return null if the final result is an empty string', () => {
    expect(array('')).toBeNull();
    expect(array('1')).toBeNull();
    expect(array('1,2')).toBeNull();
  });
});
