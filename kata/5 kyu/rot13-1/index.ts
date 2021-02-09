function rot13(message: string): string {
  return message.replace(/[a-zA-Z]/g, (character) => {
    const start = character <= 'Z' ? 65 : 97;

    return String.fromCharCode(start + ((character.charCodeAt(0) - start + 13) % 26));
  });
}

export default rot13;
