/* eslint-disable camelcase */

function shorter_reverse_longer(a: string, b: string): string {
  const shorter = a.length < b.length ? a : b;
  const longer = a.length >= b.length ? a : b;

  return `${shorter}${longer.split('').reverse().join('')}${shorter}`;
}

export default shorter_reverse_longer;
