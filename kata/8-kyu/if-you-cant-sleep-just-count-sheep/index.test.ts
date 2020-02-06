import countSheep from '.';

describe('countSheep', () => {
  it('should return string with a murmur', () => {
    expect(countSheep(1)).toEqual('1 sheep...');
    expect(countSheep(2)).toEqual('1 sheep...2 sheep...');
    expect(countSheep(3)).toEqual('1 sheep...2 sheep...3 sheep...');
  });
});
