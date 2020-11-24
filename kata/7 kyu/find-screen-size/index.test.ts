import findScreenHeight from '.';

describe('findScreenHeight', () => {
  it('should return width and height of monitor', () => {
    expect.assertions(3);

    expect(findScreenHeight(1024, '4:3')).toStrictEqual('1024x768');
    expect(findScreenHeight(1280, '16:9')).toStrictEqual('1280x720');
    expect(findScreenHeight(3840, '32:9')).toStrictEqual('3840x1080');
  });
});
