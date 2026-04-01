import Ghost from '.';

jest.mock('.');

describe('ghost', () => {
  it('should', () => {
    expect.assertions(1);

    const ghost = new Ghost();

    expect(ghost.color).toBe('white');
  });
});
