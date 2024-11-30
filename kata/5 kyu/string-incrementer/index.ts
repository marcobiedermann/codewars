function incrementString(strng: string): string {
  const { groups } = strng.match(/(?<string>[a-zA-Z]+)?(?<number>\d+)?/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { string = '', number = '0' } = groups;

  const numberLength = number.length;
  const parsedNumber = parseInt(number, 10);

  return string + (parsedNumber + 1).toString().padStart(numberLength, '0');
}

export default incrementString;
