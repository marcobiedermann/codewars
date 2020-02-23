function removeDuplicateWords(s: string): string {
  return [...new Set(s.split(' '))].join(' ');
}

export default removeDuplicateWords;
