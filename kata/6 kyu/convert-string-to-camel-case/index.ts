function toCamelCase(str: string): string {
  return str.replace(/[-_]\w/gi, word => word.charAt(1).toUpperCase());
}

export default toCamelCase;
