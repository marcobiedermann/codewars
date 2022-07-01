import isLockNessMonster from '.';

describe('isLockNessMonster', () => {
  it('should', () => {
    expect(
      isLockNessMonster('Your girlscout cookies are ready to ship. Your total comes to tree fiddy'),
    ).toBe(true);
    expect(
      !isLockNessMonster(
        'Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.',
      ),
    ).toBe(true);
  });
});
