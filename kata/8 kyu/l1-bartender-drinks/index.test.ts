import getDrinkByProfession from '.';

describe('getDrinkByProfession', () => {
  it('should return profession by drink', () => {
    expect.assertions(8);

    expect(getDrinkByProfession('jabrOni')).toStrictEqual('Patron Tequila');
    expect(getDrinkByProfession('scHOOl counselor')).toStrictEqual('Anything with Alcohol');
    expect(getDrinkByProfession('prOgramMer')).toStrictEqual('Hipster Craft Beer');
    expect(getDrinkByProfession('bike ganG member')).toStrictEqual('Moonshine');
    expect(getDrinkByProfession('poLiTiCian')).toStrictEqual('Your tax dollars');
    expect(getDrinkByProfession('rapper')).toStrictEqual('Cristal');
    expect(getDrinkByProfession('pundit')).toStrictEqual('Beer');
    expect(getDrinkByProfession('Pug')).toStrictEqual('Beer');
  });
});
