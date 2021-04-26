import _if from '.';

jest.spyOn(console, 'log').mockImplementation();

describe('_if', () => {
  it('should call `func1` when `bool` is truthy, otherwise `func2`', () => {
    expect.assertions(2);

    _if(
      true,
      function () {
        console.log('True');
      },
      function () {
        console.log('false');
      },
    );
    expect(_if).toBeDefined();
    expect(console.log).toHaveBeenCalledWith('True');
  });
});
