function sortGiftCode(code: string): string {
  return code.split('').sort().join('');
}

export default sortGiftCode;
