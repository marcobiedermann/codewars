import countSheep from '.';

describe('countSheep', () => {
  it('should return string with a murmur', () => {
    expect.assertions(3);

    expect(countSheep(1)).toStrictEqual('1 sheep...');
    expect(countSheep(2)).toStrictEqual('1 sheep...2 sheep...');
    expect(countSheep(3)).toStrictEqual('1 sheep...2 sheep...3 sheep...');
  });
});
