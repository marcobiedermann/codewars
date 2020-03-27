function isEven(n: number): boolean {
  return n % 2 === 0;
}

function encrypt(text: string, n: number): string {
  if (n <= 0 || typeof text !== 'string') {
    return text;
  }

  const textLength = text.length;
  let even = '';
  let odd = '';

  for (let i = 0; i < textLength; i += 1) {
    if (isEven(i)) {
      even += text[i];
    } else {
      odd += text[i];
    }
  }

  return encrypt(odd + even, n - 1);
}

function decrypt(encryptedText: string, n: number): string {
  if (n <= 0 || typeof encryptedText !== 'string') {
    return encryptedText;
  }

  const middle = encryptedText.length / 2;
  const odd = encryptedText.slice(0, middle);
  const even = encryptedText.slice(middle);
  let text = '';

  for (let i = 0; i < middle; i += 1) {
    if (even[i]) {
      text += even[i];
    }

    if (odd[i]) {
      text += odd[i];
    }
  }

  return decrypt(text, n - 1);
}

export { encrypt, decrypt };
