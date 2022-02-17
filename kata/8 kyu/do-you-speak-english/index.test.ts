import spEng from '.';

describe('spEng', () => {
  it('should check is sentence contains `english`', () => {
    expect.assertions(2);

    expect(spEng('english')).toBe(true);
    expect(spEng('egnlish')).toBe(false);
  });
});
