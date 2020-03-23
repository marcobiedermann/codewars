function isPalindrome(line: number | string): boolean {
  return line.toString() === line.toString().split('').reverse().join('');
}

export default isPalindrome;
