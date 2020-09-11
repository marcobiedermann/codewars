const drinkMap = new Map<string, string>([
  ['jabroni', 'Patron Tequila'],
  ['school counselor', 'Anything with Alcohol'],
  ['programmer', 'Hipster Craft Beer'],
  ['bike gang member', 'Moonshine'],
  ['politician', 'Your tax dollars'],
  ['rapper', 'Cristal'],
]);

function getDrinkByProfession(param: string): string {
  return drinkMap.get(param.toLocaleLowerCase()) || 'Beer';
}

export default getDrinkByProfession;
