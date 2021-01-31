import inviteMoreWomen from '.';

describe('inviteMoreWomen', () => {
  it('should check if Arthur needs to invite more women', () => {
    expect.assertions(4);

    expect(inviteMoreWomen([1, -1, 1])).toStrictEqual(true);
    expect(inviteMoreWomen([1, 1, 1])).toStrictEqual(true);
    expect(inviteMoreWomen([-1, -1, -1])).toStrictEqual(false);
    expect(inviteMoreWomen([1, -1])).toStrictEqual(false);
  });
});
