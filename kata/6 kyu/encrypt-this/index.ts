function encryptThis(text: string): string {
  return text.replace(
    /\b\w(\w?)(\w*?)(\w?)\b/g,
    (word, second, rest, last) => word.charCodeAt(0) + last + rest + second,
  );
}

export default encryptThis;
