function decipherThis(str: string): string {
  return str.replace(
    /\b(\d+)(\w?)(\w*?)(\w?)\b/g,
    (_word, first, second, rest, last) => String.fromCharCode(first) + last + rest + second,
  );
}

export default decipherThis;
