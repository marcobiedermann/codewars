function isPalindrome(str: string): boolean {
  const characters = str.toLowerCase().replace(/\W/g, '');

  return characters === characters.split('').reverse().join('');
}

export default isPalindrome;
